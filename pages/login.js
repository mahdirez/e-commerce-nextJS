import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler({ email, password }) {}
  return (
    <Layout title={"login"}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div class="container flex h-screen mx-auto">
          <div class="items-center grid-cols-3 m-auto shadow-2xl lg:grid">
            <div class="m-auto flex items-center justify-center lg:h-[650px] w-96  lg:bg-[url('/images/loginImg.jpg')]  bg-cover bg-center "></div>
            <div class="w-full max-w-sm col-start-2 col-end-4 mx-auto">
              <div class="p-5 text-3xl font-semibold text-center ">Login</div>
              <label for="email" class="font-medium uppercase">
                Email
              </label>
              <div class="relative">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  class="w-full p-2 border-b focus:border-b-2 outline-0"
                />
                {errors.email && (
                  <div className="text-red-500">Please enter email.</div>
                )}
              </div>
              <div class="pt-4">
                <label for="password" class="font-medium uppercase">
                  Password
                </label>
              </div>
              <div class="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 chars.",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  class="w-full p-2 pr-3 border-b focus:border-b-2 outline-0"
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div class="mt-14">
                <button class="w-full p-3 font-medium text-white transition-all duration-300 bg-black border-2 rounded-3xl hover:border-2 hover:border-black hover:bg-white hover:text-black">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default LoginPage;
