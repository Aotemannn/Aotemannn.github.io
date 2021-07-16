
import makeStore from './makeStore';

function reducer(state, action) {
  switch (action.type) {
    case 'CONNECT':
      return { ...state, isConnected: action.payload.isConnected };
    default:
      return state;
  }
}

const [WalletProvider, useWallet, useDispatch] = makeStore(reducer, {
  isConnected: false
});

export { WalletProvider, useWallet, useDispatch };
