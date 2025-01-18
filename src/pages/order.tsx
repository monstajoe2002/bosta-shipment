import { useQuery } from "@tanstack/react-query";
import { DeliveryTimeline } from "../components/delivery-timeline";
import { TrackingDetails } from "../components/tracking-details";
import { useParams } from "react-router";

export const Order = () => {
  const { trackingNumber } = useParams();
  const {
    data: shipment,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["shipment", trackingNumber],
    queryFn: async () => {
      const order = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
        {
          headers: {
            "x-requested-by": "Bosta",
          },
        }
      );
      const res = await order.json();
      return res;
    },
  });
  if (shipment?.error || isError) {
    return (
      <p className="text-red-500 tracking-wide md:text-3xl text-2xl font-medium mt-12 text-center">
        {shipment.error}
      </p>
    );
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-gray-500 md:text-3xl text-2xl font-medium">
          Loading...
        </h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto max-w-5xl">
      <DeliveryTimeline shipment={shipment} />
      <TrackingDetails shipment={shipment} />
    </div>
  );
};
