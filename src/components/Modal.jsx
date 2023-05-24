import React from "react";
import { Button } from "@mui/material";

// 登録時のモーダル
const Modal = ({ setIsModalOpen }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white w-4/12 flex flex-col items-center justify-center rounded-2xl'>
        <div className='font-black text-test text-3xl tracking-widest mt-24 mb-12'>
          登録が完了しました
        </div>
        <Button
          variant='contained'
          style={{
            backgroundColor: "#88E186",
            fontWeight: 900,
            fontSize: 24,
            marginLeft: 10,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            marginBottom: 30,
          }}
          className='w-36 h-12'
          onClick={() => setIsModalOpen(false)}
        >
          とじる
        </Button>
      </div>
    </div>
  );
};

export default Modal;
