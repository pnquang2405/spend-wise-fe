export const LoginForm = ({
  onLoginSuccess,
  onShowRegister,
}: {
  onLoginSuccess: () => void
  onShowRegister: () => void
}) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Chào mừng trở lại!</h2>
    <p className="text-gray-500 mb-6">Đăng nhập để tiếp tục quản lý chi tiêu của bạn.</p>
    <div className="flex flex-col gap-3">
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50">
        <i className="fab fa-google text-red-500"></i> Đăng nhập với Google
      </button>
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50">
        <i className="fab fa-facebook text-blue-600"></i> Đăng nhập với Facebook
      </button>
    </div>

    <div className="my-6 flex items-center">
      <hr className="w-full border-gray-300" />
      <span className="px-2 text-sm text-gray-400">HOẶC</span>
      <hr className="w-full border-gray-300" />
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onLoginSuccess()
      }}
    >
      <div className="mb-4">
        <label htmlFor="login-email" className="block text-sm font-medium text-gray-600 mb-1">
          Email
        </label>
        <input
          type="email"
          id="login-email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="nhap@email.com"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-600 mb-1">
          Mật khẩu
        </label>
        <input
          type="password"
          id="login-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
            Ghi nhớ tôi
          </label>
        </div>
        <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
          Quên mật khẩu?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition-colors"
      >
        Đăng nhập
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6">
      Chưa có tài khoản?
      <button onClick={onShowRegister} className="font-bold text-sky-600 hover:underline">
        Đăng ký ngay
      </button>
    </p>
  </div>
)
