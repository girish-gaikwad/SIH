import { ArrowDown, ArrowUp, Bell, LayoutGrid, Maximize2, Moon, Search, ShoppingCart, Users } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

export default function Component() {
  const data = Array(12).fill(0).map((_, i) => ({ value: Math.random() * 100 }))
  const monthlyData = Array(12).fill(0).map((_, i) => ({ value: Math.random() * 100 }))
  
  const products = [
    {
      name: "Patimax Fragrance Long...",
      items: "100 Items",
      code: "Sflat",
      price: "$27.00",
      discount: "-15%",
      flag: "🇦🇹"
    },
    {
      name: "Nulo MedalSeries Adult Cat...",
      items: "100 Items",
      code: "Sflat",
      price: "$27.00",
      discount: "-15%",
      flag: "🇮🇳"
    },
    // Add more products as needed
  ]

  const countries = [
    { name: "Turkish Flag", value: "6,972", trend: "up", flag: "🇹🇷" },
    { name: "Belgium", value: "6,972", trend: "up", flag: "🇧🇪" },
    { name: "Sweden", value: "6,972", trend: "down", flag: "🇸🇪" },
    // Add more countries as needed
  ]

  return (
    <div className="w-screen h-screen bg-[#f2f7fb] ">

        
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <button className="flex items-center space-x-1 bg-white text-black shadow-md">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <form className="flex w-full max-w-sm items-center space-x-2 ">
            <input 
              type="search"
              placeholder="Search here..."
              className="flex-1 h-9 rounded-lg border bg-background px-3 text-sm bg-white text-black shadow-md"
            />
            <button type="submit" className="flex items-center px-3 bg-white text-black shadow-md">
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="flex items-center space-x-4 ">
            <button variant="ghost" size="icon" className='bg-white text-black shadow-md'>
              <Moon className="h-4 w-4" />
            </button>
            <button variant="ghost" size="icon" className="relative bg-white text-black shadow-md" >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
            </button>
            <button variant="ghost" size="icon" className="relative bg-white text-black shadow-md">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
            </button>
            <button variant="ghost" size="icon" className='bg-white text-black shadow-md'>
              <Maximize2 className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-1">
              <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="div" className="h-8 w-8 rounded-full" />
              {/* <span className="text-sm font-medium">AD</span> */}
            </div>
          </div>
        </div>
      </header>


      <main className="container py-6 px-6">
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-white rounded-lg shadow-lg'>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-green-600">Total Sales</p>
                    <h2 className="text-2xl font-bold text-green-400">34,945</h2>
                  </div>
                </div>
                <div className="flex items-center text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">1.56%</span>
                </div>
              </div>
              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-orange-600">Total Income</p>
                    <h2 className="text-2xl font-bold text-orange-400">$37,802</h2>
                  </div>
                </div>
                <div className="flex items-center text-red-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">1.56%</span>
                </div>
              </div>



              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-orange-600">Total Income</p>
                    <h2 className="text-2xl font-bold text-orange-400">$37,802</h2>
                  </div>
                </div>
                <div className="flex items-center text-red-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">1.56%</span>
                </div>
              </div>



              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-orange-600">Total Income</p>
                    <h2 className="text-2xl font-bold text-orange-400">$37,802</h2>
                  </div>
                </div>
                <div className="flex items-center text-red-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">1.56%</span>
                </div>
              </div>



              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* Similar cards for Orders Paid and Total Visitor */}
        </div>




        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4   ">
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-blue-600">Recent Order</h3>
                <button variant="ghost" className='bg-blue-500' size="icon">
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-green-600">Top Products</h3>
                <button variant="link" className="text-sm bg-green-500">View all</button>
              </div>
              <div className="mt-4 space-y-4">
                {products.map((product, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                      <div>
                        <p className="text-sm font-medium text-black">{product.name}</p>
                        <p className="text-sm text-muted-foreground text-orange-300">{product.items}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-400">{product.discount}</p>
                      <p className="text-sm text-muted-foreground text-red-400">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex text-black items-center justify-between">
                <h3 className="text-lg font-medium">Top Countries By Sales</h3>
                <button variant="link" className="text-sm bg-orange-300">View all</button>
              </div>
              <div className="mt-4 space-y-4 text-black ">
                {countries.map((country, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{country.flag}</div>
                      <p className="text-sm font-medium">{country.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-orange-500">{country.value}</p>
                      {country.trend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}