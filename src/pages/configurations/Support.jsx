export const Support = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <svg
        className="mt-10 mb-5"
        width="40"
        height="42"
        viewBox="0 0 40 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.9136 37.8537C14.4445 37.8537 3.79424 37.9024 0.962964 38C0.864198 37.9187 0.757202 37.7805 0.641975 37.5854C0.526749 37.3903 0.419753 37.1789 0.320988 36.9512C0.222222 36.7236 0.139918 36.5041 0.074074 36.2927C0.0246913 36.0651 0 35.8862 0 35.7561C3.81894 30.4227 7.60495 25.0895 11.358 19.7561C15.1112 14.4065 18.8231 9.04878 22.4939 3.68293C20.9959 3.76423 19.6379 3.88618 18.4198 4.04879C17.2017 4.21138 16.0659 4.43903 15.0124 4.73171C13.9589 5.02439 12.9547 5.39024 12 5.82927C11.0617 6.25203 10.107 6.76423 9.13581 7.36586C8.16461 7.95122 7.1605 8.63415 6.12346 9.41464C5.08643 10.1951 3.95062 11.0813 2.71605 12.0732C1.54732 11.7968 0.757202 11.2195 0.345679 10.3415C3.25926 7.31707 5.31687 3.86992 6.51852 0C8.64198 0.0813009 10.7654 0.138211 12.8889 0.170732C15.0124 0.186991 17.1523 0.195122 19.3086 0.195122C21.4651 0.195122 23.6214 0.186991 25.7777 0.170732C27.9342 0.138211 30.1152 0.0813009 32.321 0C33.4238 0.357724 33.9754 1.15448 33.9754 2.39025C29.7614 8.27643 25.7777 13.8862 22.0247 19.2196C18.2717 24.5366 14.7572 29.5853 11.4815 34.3659H18.4938C20.535 34.3659 22.3622 34.0651 23.9753 33.4634C25.5885 32.8456 26.9959 32.0082 28.1976 30.9512C29.3992 29.8944 30.4034 28.6505 31.2099 27.2195C32.0329 25.7886 32.6832 24.2521 33.1606 22.6098C34.4773 22.8862 35.4239 23.3903 36 24.122C35.9341 24.3659 35.8354 24.7154 35.7037 25.1707C35.5885 25.6261 35.4486 26.1382 35.284 26.7074C35.1358 27.2765 34.9712 27.8862 34.7902 28.5366C34.609 29.1707 34.4362 29.7968 34.2716 30.4146C34.1071 31.0163 33.9589 31.5935 33.8272 32.1464C33.6955 32.6992 33.5391 33.4147 33.358 34.2927C33.177 35.1544 33.0289 36.3415 32.9136 37.8537ZM21.3334 36.8537C25.1523 36.8537 28.0494 35.8618 30.0247 33.878C32.0165 31.8943 33.5721 28.6748 34.6914 24.2196C34.4115 23.9919 34.0906 23.8537 33.7284 23.8049C33.2839 25.3821 32.6996 26.813 31.9754 28.0976C31.251 29.3659 30.2963 30.5691 29.1112 31.7074C27.9424 32.8456 26.4527 33.7398 24.642 34.3903C22.8477 35.0407 20.8148 35.3659 18.5433 35.3659H6.81482C14.535 24.0976 22.3292 13.0082 30.1975 2.09756C30.1975 1.56098 29.9259 1.19513 29.3827 1C23.1111 1.1626 15.7448 1.1626 7.28395 1C6.09876 4.65853 4.20576 7.8374 1.60494 10.5366C1.81893 10.8943 2.15638 11.0732 2.61729 11.0732C5.48149 8.43903 7.67901 5.92683 9.20988 3.53659C9.67079 3.50406 11.7037 3.34959 15.3086 3.07317C18.9301 2.78049 21.9836 2.61788 24.4692 2.58537C16.9136 13.6749 9.09466 24.8293 1.01235 36.0488C1.01235 36.4553 1.12758 36.7724 1.35802 37C3.15226 36.9024 9.81071 36.8537 21.3334 36.8537Z"
          fill="#6C3483"></path>
      </svg>
      <div className="flex flex-col lg:w-[1040px] m-5 justify-center mb-20 items-center">
          <h2 className="text-9xl font-bold text-center mb-10">Bienvenidos al centro de ayuda</h2>
          <form action="" className="flex flex-col justify-center items-center">
            <input type="text" className="w-[900px] h-14 rounded-md"/>
            <p className="text-xl mt-2">Deja tu consulta en este sector que en breves te estaremos respondiendo</p>
            <button className="w-32 h-12 bg-blue-400 rounded-md mt-10">Enviar</button>
          </form>
      </div>
    </main>
  )
}

