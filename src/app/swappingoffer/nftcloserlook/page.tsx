import dynamic from 'next/dynamic';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const SwapNFTCard = dynamic(
  () => import('@/components/Cards/swap-nft/swap-nft-card')
);
const SwapNFTCardCloser = dynamic(
  () => import('@/components/Cards/swap-nft/swap-card-closer')
);

const SwappingOffer = () => {
  return (
    <>
      <MobileLayout>
        <div className="my-6">
          <SwapNFTCardCloser />
        </div>
      </MobileLayout>
    </>
  );
};

export default SwappingOffer;
