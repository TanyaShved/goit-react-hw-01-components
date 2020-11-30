import Profile from './components/Profile/Profile';
import user from './informations/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './informations/statistical-data.json';

import FriendList from './components/Friendlist/FriendList';
import friends from './informations/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './informations/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};