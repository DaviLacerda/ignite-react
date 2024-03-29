import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem("@RocketShoes:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            let stock: Stock = await api
                .get(`/stock/${productId}`)
                .then((response) => response.data);
            let product = await api
                .get(`/products/${productId}`)
                .then((response) => response.data);

            const productAmount = cart.reduce((acc, product) => {
                if (product.id === productId) {
                    acc += product.amount;
                }
                return acc;
            }, 1);

            if (productAmount > stock.amount) {
                toast.error("Quantidade solicitada fora de estoque");
                return;
            }

            if (productAmount === 1) {
                const newProduct = {
                    ...product,
                    amount: 1,
                };
                setCart([...cart, newProduct]);
                localStorage.setItem(
                    "@RocketShoes:cart",
                    JSON.stringify([...cart, newProduct])
                );
            } else {
                const newCart = cart.map((item) => {
                    if (item.id === productId) {
                        return { ...item, amount: item.amount + 1 };
                    }
                    return item;
                });
                setCart(newCart);
                localStorage.setItem(
                    "@RocketShoes:cart",
                    JSON.stringify(newCart)
                );
            }
        } catch {
            toast.error("Erro na adição do produto");
        }
    };

    const removeProduct = (productId: number) => {
        try {
            let thisProductExist = false
            const newCart = cart.filter((product) => {
                if (product.id === productId) {
                  thisProductExist = true
                  return
                }
                return product;
            });

            if(!thisProductExist){
              throw new Error()
            }

            setCart(newCart);
            localStorage.setItem("@RocketShoes:cart", JSON.stringify(newCart));
        } catch {
            toast.error("Erro na remoção do produto");
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            let stock: Stock = await api
                .get(`/stock/${productId}`)
                .then((response) => response.data);

            if (amount <= 0) {
                return;
            }

            if (amount > stock.amount) {
                toast.error("Quantidade solicitada fora de estoque");
                return;
            }

            const newCart = cart.map((product) => {
                if (productId === product.id) {
                    return {
                        ...product,
                        amount,
                    };
                } else {
                    return product;
                }
            });

            setCart(newCart);
            localStorage.setItem(
                "@RocketShoes:cart",
                JSON.stringify([...newCart])
            );
        } catch {
            toast.error("Erro na alteração de quantidade do produto");
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}
