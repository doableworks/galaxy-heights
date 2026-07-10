import UnifiedEnquiryDialog from "@/components/common/UnifiedEnquiryDialog";
import { Button } from "@/components/ui/button";
import { priceCards } from "@/lib/constants/staticStats";

function PricesSection() {
  return (
    <section className="w-full px-6 pb-16 lg:px-16 lg:pb-24" id="prices">
      <div className="flex min-h-[60vh] w-full flex-col border-y-8 border-[var(--gold-colour)] bg-white lg:border-b-24">
        <h2 className="pt-6 text-center text-3xl font-bold tracking-none lg:text-5xl">
          Prices
        </h2>

        <div className="grid flex-1 grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-0 lg:px-12">
          {priceCards.map((card, index) => {
            const isMiddleCard = index === 1;

            return (
              <article
                key={card.title}
                className="relative flex min-h-[280px] flex-col items-center justify-center gap-8 px-6 py-10 text-center"
              >
                {isMiddleCard && (
                  <>
                    <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-primary lg:hidden" />
                    <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-primary lg:hidden" />
                    <div className="absolute left-0 top-1/2 hidden h-[60%] w-px -translate-y-1/2 bg-primary lg:block" />
                    {/* <div className="absolute right-0 top-1/2 hidden h-[60%] w-px -translate-y-1/2 bg-primary lg:block" /> */}
                  </>
                )}

                <div className="flex flex-col items-center justify-start gap-4">
                  <h3 className="text-3xl font-bold text-black lg:text-4xl">
                    {card.title}
                  </h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-xl font-semibold text-[var(--dark-blue)] lg:text-2xl">
                      {card.area}
                    </p>
                    <p className="text-xl font-semibold text-[var(--dark-blue)] lg:text-2xl">
                      (Rera Carpet Area)
                    </p>
                  </div>
                </div>

                <UnifiedEnquiryDialog
                  title={`Check Price for ${card.title}`}
                  purpose={`Price enquiry for ${card.title} of ${card.area}`}
                >
                  <Button className="rounded-none bg-[var(--gold-colour)] px-8 py-6 text-base font-semibold text-white transition-opacity hover:opacity-90">
                    Check Price
                  </Button>
                </UnifiedEnquiryDialog>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricesSection;
