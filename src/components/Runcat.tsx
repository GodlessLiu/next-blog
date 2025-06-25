'use client';
import { useNetwork } from '@/hooks/useNetwork';

export function Runcat() {
  const { downlink, isVisible } = useNetwork({ pollingInterval: 1000 * 60 }); // 60s查询一次
  if (!isVisible) return null;
  return (
    <>
      <p className="h-full flex items-center gap-2">
        <span
          title={`当前网速：${downlink} Mbps`}
          className="inline-block running-cat w-4 h-4 cursor-pointer"
          style={{ animationDuration: 2 / downlink + 's' }}
        ></span>
      </p>
    </>
  );
}
