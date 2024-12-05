import dynamic from 'next/dynamic';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
// const OrderInformation = dynamic(() => import("@/components/Profile/order"));
// const AdminOrderInformation = dynamic(
//   () => import("@/components/Profile/orders")
// );

const Order = () => {
  return (
    <>
      <MobileLayout>
        <div className="flex w-[100%] items-center justify-center flex-col">
          <br /> <br />
          {/* <OrderInformation /> */}
          <br />
        </div>
      </MobileLayout>
    </>
  );
};

export default Order;
