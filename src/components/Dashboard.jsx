import React from 'react';
import { 
  BarChart3, 
  CreditCard, 
  FileText, 
  FolderOpen, 
  Receipt, 
  Wallet, 
  Settings, 
  HelpCircle, 
  LogOut,
  Moon,
  Search,
  Bell,
  Plus,
  ChevronRight,
  TrendingUp,
  Eye
} from 'lucide-react';

export default function ProlanceDashboard() {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: CreditCard, label: 'Transactions' },
    { icon: FolderOpen, label: 'Projects' },
    { icon: Receipt, label: 'Invoice' },
    { icon: Wallet, label: 'My Wallets' },
    { icon: Settings, label: 'Settings', subtitle: 'Security center' },
    { icon: HelpCircle, label: 'Help' },
    { icon: LogOut, label: 'Logout' }
  ];

  const invoices = [
    { id: 'INV-230162', name: 'Ruban', platform: 'Android', amount: '₹1600', status: 'Paid', statusColor: 'bg-green-100 text-green-800' },
    { id: 'INV-230163', name: 'Heather', platform: 'Android', amount: '₹3600', status: 'Paid', statusColor: 'bg-green-100 text-green-800' },
    { id: 'INV-230164', name: 'Ruth', platform: 'Android', amount: '₹3400', status: 'In Progress', statusColor: 'bg-yellow-100 text-yellow-800' },
    { id: 'INV-230165', name: 'AB A (suspicious)', platform: 'Android', amount: '₹2400', status: 'Overdue', statusColor: 'bg-red-100 text-red-800' }
  ];

  const projects = [
    { title: 'AB Website Redesign', client: 'ABC', progress: 50 },
    { title: 'Develop a React Native app', client: 'Lemon Incorporation', progress: 10 },
    { title: 'Design a website for Prolance.in', client: 'Prolance Incorporation', progress: 90 }
  ];

  const messages = [
    { name: 'AB', avatar: '🔺', message: 'I will send you the ...', time: '1 day ago' },
    { name: 'Ruth', avatar: '👩', message: 'How much would ...', time: '1 week ago' },
    { name: 'Lemon', avatar: '🍋', message: "I'm not interested ...", time: '1 month ago' },
    { name: 'Heather', avatar: '👩‍🦰', message: "Actually let's mak ...", time: '3 months ago' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">Prolance</h1>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`flex items-center px-6 py-3 text-sm font-medium cursor-pointer transition-colors ${
              item.active 
                ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}>
              <item.icon className="w-5 h-5 mr-3" />
              <div>
                <div>{item.label}</div>
                {item.subtitle && <div className="text-xs text-gray-400">{item.subtitle}</div>}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Moon className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  M
                </div>
                <span className="text-sm font-medium text-gray-700">Mithun S K</span>
                <span className="text-yellow-500">⚡</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Balance */}
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-lg p-6 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm">Total Balance</p>
                  <p className="text-2xl font-bold">₹6,125</p>
                </div>
              </div>
            </div>

            {/* Total Spending */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Wallet className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Spending</p>
                  <p className="text-2xl font-bold text-gray-900">₹1,450</p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Analytics</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">1,298</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">90%</span>
                    </div>
                  </div>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeDasharray="90, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-900">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Earning Reports */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Earning reports</h3>
                  <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                    <option>Yearly</option>
                  </select>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Income in 2024</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-gray-900">₹132.9k</p>
                    <span className="ml-2 text-sm text-green-600 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      2.3%
                    </span>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-end p-4">
                  <div className="w-full h-32 bg-gradient-to-t from-blue-400 to-blue-300 rounded opacity-80 relative">
                    <div className="absolute top-2 left-4 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      ₹2,500k
                      <div className="text-gray-400">₹5,500</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Projects */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Active projects (3)</h3>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-indigo-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add new project
                  </button>
                </div>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{project.title}</h4>
                          <p className="text-sm text-gray-600">Client: {project.client}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Invoices */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoices</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-gray-500 uppercase tracking-wide">
                        <th className="text-left pb-2">Invoice ID</th>
                        <th className="text-left pb-2">Name</th>
                        <th className="text-left pb-2">Platform</th>
                        <th className="text-left pb-2">Bill</th>
                        <th className="text-left pb-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {invoices.map((invoice, index) => (
                        <tr key={index} className="border-t border-gray-100">
                          <td className="py-3 text-gray-600">{invoice.id}</td>
                          <td className="py-3 text-gray-900">{invoice.name}</td>
                          <td className="py-3 text-gray-600">{invoice.platform}</td>
                          <td className="py-3 font-medium text-gray-900">{invoice.amount}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${invoice.statusColor}`}>
                              {invoice.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inbox */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inbox</h3>
                  <button className="text-indigo-600 text-sm font-medium flex items-center hover:text-indigo-700">
                    View all
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                        {message.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{message.name}</p>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}