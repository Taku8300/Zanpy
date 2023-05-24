import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   console.log(username);
  //   console.log(password);

  //   try {
  //     const response = await axios.post("http://backend:3004/api/login", {
  //       username,
  //       password,
  //     });

  //     // ログイン成功時の処理を記述します
  //     console.log(response.data.message);
  //     // ログイン後のリダイレクト先を設定します
  //     navigate("/my-area");
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.data &&
  //       error.response.data.message
  //     ) {
  //       // ログイン失敗時の処理を記述します
  //       console.error(error.response.data.message);
  //     } else {
  //       // エラーレスポンスが存在しない場合の処理を記述します
  //       console.error("An error occurred during login", error);
  //     }
  //   }
  // };

  return (
    <div className='bg-white rounded-3xl mx-auto w-4/12 p-8 shadow-2xl'>
      <h2 className='my-4 text-center text-test font-arial font-black text-4xl'>
        Log in
      </h2>

      <form className='mx-auto max-w-sm'>
        <div className='flex flex-col gap-4 p-4 md:p-8'>
          <div>
            <label className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'>
              社員ID
            </label>
            <input
              name='email'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'>
              パスワード
            </label>
            <input
              name='password'
              type='password'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant='contained'
            style={{
              backgroundColor: "#88E186", //bg-main-green
              fontWeight: 900,
              fontSize: 24,
              top: 20,
              paddingRight: 10,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 10,
            }}
            className='w-6/12'
            // onClick={handleLogin} // ログインボタンが押された時のハンドラー関数を指定
            onClick={() => navigate("/my-area")}
          >
            ログイン
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
