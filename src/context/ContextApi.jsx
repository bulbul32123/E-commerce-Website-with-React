import { createContext, useEffect, useState } from "react";
export const Contexts = createContext()

const getLocalCartItems = ()=>{
  let items = localStorage.getItem('addedItemsToCart');
  if(items){
    return  JSON?.parse(localStorage.getItem('addedItemsToCart'));
  }else{
    return []
  }
}

const getLocalsCartItems = ()=>{
  let saveItems = localStorage.getItem('saveList');
    if(saveItems){
    return  JSON?.parse(localStorage.getItem('saveList'));
    }else{
      return []
    }
}


export const ContextApi = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const [getProducts, setGetProducts] = useState([]);
  const [saveProducts, setSaveProducts] = useState(getLocalsCartItems());
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [getCartItems, setGetCartItems] = useState(getLocalCartItems());
  const [getTotalPrice, setGetTotalPrice] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showMessage, setShowMessage] = useState(false);



  const handleIncrement = (id) => {
    setGetCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const handleDecrement = (id) => {
    setGetCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  
  const calculateTotalPrice = () => {
    let price = getCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setGetTotalPrice(price.toFixed(2))
  };

  
  const handleCartItems = (CategoryName, title, price, imageUrl, id) => {
    const isAlreadyInCart = getCartItems.some((item) => item.id === id);

    if (isAlreadyInCart) {
      setGetCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setGetCartItems((prev) => [
        ...prev,
        { CategoryName, title, price, imageUrl, id, quantity: 1 },
      ]);
    }
  };

  const getSaveData = (CategoryName, title, price, imageUrl, id) => {
    const isAlreadyInSave = saveProducts.some((item) => item.id === id);
  
    if (isAlreadyInSave) {
      setShowToast(true)

    } else {
      setSaveProducts((prev) => [
        ...prev,
        { CategoryName, title, price, imageUrl, id },
      ]);
    }
  };

  const handleRemoveCartItems = (id) => {
    setGetCartItems((prev) => prev.filter((item) => item?.id !== id));
  };
  const removeItemFromSave = (id) => {
    setSaveProducts((prev) => prev.filter((item) => item?.id !== id));
  };


  useEffect(() => {
    calculateTotalPrice();
  }, [getCartItems]);

  useEffect(()=>{
    localStorage.setItem('addedItemsToCart', JSON.stringify(getCartItems))
    localStorage.setItem('saveList', JSON.stringify(saveProducts))
  },[getCartItems, saveProducts, ])


  return (
    <Contexts.Provider value={{
      getCategory, setGetCategory,
      handleRemoveCartItems,
      handleIncrement,
      handleDecrement,
      getSaveData,
      setShowToast,
      loading, setLoading,
      handleCartItems,
      showMessage, setShowMessage,
      isProfileOpen, setIsProfileOpen,
      getProducts, setGetProducts,
      isCartOpen, setIsCartOpen,
      getCartItems, setGetCartItems,
      getTotalPrice,
      showToast,
      removeItemFromSave,
      saveProducts, setSaveProducts,
    }
    }>{children}
    </Contexts.Provider>
  )


}




