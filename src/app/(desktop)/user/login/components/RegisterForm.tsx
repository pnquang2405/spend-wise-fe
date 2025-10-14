export const RegisterForm = ({
  onLoginSuccess,
  onShowLogin,
}: {
  onLoginSuccess: () => void
  onShowLogin: () => void
}) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Tạo tài khoản mới</h2>
    <p className="text-gray-500 mb-6">Bắt đầu quản lý tài chính và lên kế hoạch vui chơi!</p>
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
      <div className="mb-4">
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-600 mb-1">
          Nhập lại mật khẩu
        </label>
        <input
          type="password"
          id="re-login-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition-colors"
      >
        Đăng ký
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6">
      Đã có tài khoản?{' '}
      <button onClick={onShowLogin} className="font-bold text-sky-600 hover:underline">
        Đăng nhập
      </button>
    </p>
  </div>
)
