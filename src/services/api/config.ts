/**
 * Created by Hanan Cohen on 1/2/20.
 */
const devGraphql = 'minhelet-api.herokuapp.com' // 'localhost:3001';//

const configList = {
  APP_VERSION: '1.0',
  DEV: {
    graphql: `https://${devGraphql}/graphql`,
    subscriptions: `ws://${devGraphql}/subscriptions`
  },
  PROD: {
    graphql: `https://${devGraphql}/graphql`,
    subscriptions: `ws://${devGraphql}/subscriptions`
  }
}

export const ENVIRONMENT = 'DEV' // set this to change global environment mode, options are PROD || DEV
export const environmentOptions = {
  PROD: 'PROD',
  DEV: 'DEV'
}

export const config = configList[ENVIRONMENT]

export const RESPONSE_CODE_OK = 200
export const RESPONSE_CODE_UNAUTHORIZED = 401
export const RESPONSE_CODE_EXPIRED_SESSION = 403
