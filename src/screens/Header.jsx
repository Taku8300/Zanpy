import React from "react";
import LogoImg from "../assets/img/zanpy-logo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='h-24 bg-main_green shadow-xl flex items-center justify-between pl-10 pr-14 py-2'>
      {/* ロゴ */}
      <div className='flex items-center'>
        <img src={LogoImg} alt='logo' className='h-16' />
      </div>
      {/* 遷移ボタン */}
      <div className='flex space-x-8 mr-auto pt-3'>
        <button
          className='font-arial text-test font-black text-xl ml-24'
          onClick={() => navigate("/my-area")}
        >
          担当エリア
        </button>
        <button
          className='font-arial text-test font-black text-xl'
          onClick={() => navigate("/search")}
        >
          検索
        </button>
      </div>

      <Button
        variant='contained'
        style={{
          color: "#706F6F", //test
          backgroundColor: "#FFFFFF",
          fontWeight: 900,
          fontSize: 18,
          borderRadius: 10,
        }}
        className='w-36 h-12'
        onClick={() => navigate("/login")}
      >
        ログアウト
      </Button>
    </header>
  );
};

export default Header;
