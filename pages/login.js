import Layout from "../components/Layout";
const LoginPage = () => {
  return (
    <Layout title={"login"}>
      <div class="container flex h-screen mx-auto">
        <div class="items-center grid-cols-3 m-auto shadow-2xl lg:grid">
          <div class="m-auto flex items-center justify-center lg:h-[650px] w-96  lg:bg-[url('/static_files/images/mobile.jpg')]  bg-cover bg-center ">
            <div class="hidden font-bold text-white uppercase lg:block text-7xl">
              THE APP
            </div>
          </div>
          <div class="w-full max-w-sm col-start-2 col-end-4 mx-auto">
            <div class="p-5 text-3xl font-semibold text-center ">Login</div>
            <label for="username" class="font-medium uppercase">
              USERNAME
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                class="w-full p-2 border-b focus:border-b-2 outline-0"
              />
              <div class="absolute cursor-pointer top-2 right-3">
                <img
                  class="w-5 h-5"
                  src="/static_files/svgs4/user-solid.svg"
                  alt="user"
                />
              </div>
            </div>
            <div class="pt-4">
              <label for="password" class="font-medium uppercase">
                Password
              </label>
            </div>
            <div class="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                class="w-full p-2 pr-3 border-b focus:border-b-2 outline-0"
              />
              <div
                class="absolute cursor-pointer top-2 right-3"
                id="toggle-password"
              >
                <img
                  class="w-5 h-5"
                  src="/static_files/svgs4/eye-regular.svg"
                  alt="eye"
                />
              </div>
            </div>
            <div class="mt-14">
              <button class="w-full p-3 font-medium text-white transition-all duration-300 bg-black border-2 rounded-3xl hover:border-2 hover:border-black hover:bg-white hover:text-black">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LoginPage;
