type TRoute = {
  path: string
  label: string
}

type Route = TRoute & {
  children?: {
    [key: string]: TRoute
  }
}

type Routes = {
  [key: string]: Route
}

const routes: Routes = {
  home: {
    path: '/',
    label: 'HOME',
  },
  game: {
    path: '/game',
    label: 'GAME',
  },
  infor: {
    path: '/infor',
    label: 'INFOR',
  },
  news: {
    path: '/news',
    label: 'NEWS',
  },
  promotions: {
    path: '/promotions',
    label: 'PROMOTIONS',
  },
  vip: {
    path: '/vip',
    label: 'VIP',
  },
  login: {
    path: '/login',
    label: 'LOGIN',
  },
  registration: {
    path: '/registration',
    label: 'REGISTRATION',
  },
}

export const headerLinks: Route[] = [routes.home, routes.game, routes.infor, routes.news, routes.promotions, routes.vip]

export default routes
