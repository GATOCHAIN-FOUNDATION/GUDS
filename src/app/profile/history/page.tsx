import dynamic from 'next/dynamic';

const History = dynamic(() => import('@/components/Profile/history'));
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

const HistoryPage = () => {
  return (
    <>
      <MobileLayout>
        <History />
      </MobileLayout>
    </>
  );
};

export default HistoryPage;
