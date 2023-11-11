export default function Page() {
  const MOCKDATA = {
    base: {
      currency_code: "USD",
      currency_name: "United States dollar",
      current_date: "2023-10-31",
      ath: {
        date: "2021-11-10",
        price: 69000,
      },
      current_price: 34000,
    },
    rates: {
      BRL: {
        currency_name: "Brazilian Real",
        ath: {
          exchange_rate: 5.4477,
          price: 375891.3,
        },
        current: {
          exchange_rate: 5.2154,
          price: 177323.6,
        },
        variation_since_ath: -52.82,
      },
      EUR: {
        currency_name: "Euro",
        ath: {
          exchange_rate: 0.85,
          price: 58650,
        },
        current: {
          exchange_rate: 0.88,
          price: 29920,
        },
        variation_since_ath: -49,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col p-4 bg-orange-200">
      <div className="flex flex-col items-center justify-center bg-orange-400 h-40 rounded-lg overflow-hidden p-4 lg:flex-row lg:justify-around ">
        <h1 className="font-black text- text-white italic whitespace-nowrap md:text-2xl lg:text-4xl">
          Top Fiat Currencies since All Time High
        </h1>
        <div className="flex flex-col items-center mt-2 lg:ml-2">
          <div className="flex">
            <p className="font-black text-4xl text-white italic lg:text-6xl">
              <span className="text-slate-700 font-medium">ATH</span>
              69,000
            </p>
            <p className="text-base text-white italic ml-2">$usd</p>
          </div>
          <p className="font-bold text-sm text-slate-700 italic mt-1 lg:mt-2">
            on November 10th, 2021
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="w-11/12 lg:max-w-6xl">
          <div className="flex justify-around">
            <div className="text-xs italic">Currency</div>
            <div className="text-xs italic">Current price</div>
          </div>

          <div className="mt-4 flex justify-between">
            <div className="mr-1.5">1.</div>
            <div className="mr-1.5">🇧🇷</div>
            <div className="mr-1.5 box-border w-1/3">
              <div className="font-bold">BRL</div>
              <div className="text-xs italic">Currency</div>
            </div>
            <div className="flex items-center w-1/2 shrink-0">
              {/* <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Flowbite
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  45%
                </span>
              </div> */}
              <div className="w-full bg-gray-100 rounded-md h-7">
                <div
                  className="flex items-center bg-green-400 h-7 rounded-md pl-2 box-border text-white font-semibold"
                  style={{ width: "45%" }}
                >-45%</div>
                400
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <div className="mr-1.5">1.</div>
            <div className="mr-1.5">🇧🇷</div>
            <div className="mr-1.5 box-border w-1/3">
              <div className="font-bold">BRL</div>
              <div className="text-xs italic">Currency</div>
            </div>
            <div className="w-1/2 bg-red-500 shrink-0">load bar</div>
          </div>
        </div>
      </div>
    </main>
  );
}
