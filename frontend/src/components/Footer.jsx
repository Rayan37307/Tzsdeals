import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

        {/* Branding & Subscription */}
        <div className="flex flex-col gap-4 max-w-xs">
          <img src="/logo-dark.svg" alt="Logo" className="w-32" />
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded-full px-4 py-2 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>111 Bijoy Sarani, Dhaka, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Account</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Quick Link</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* App Download */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Download App</h4>
          <p className="text-xs text-gray-300">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2">
            <img src="https://placehold.co/76x76" className="w-16 h-16 border border-white rounded" alt="QR" />
            <div className="flex flex-col gap-2">
              <img src="https://placehold.co/104x30" className="w-24 border border-white rounded" alt="App Store" />
              <img src="https://placehold.co/104x34" className="w-24 border border-white rounded" alt="Google Play" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-12 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TZS Deals. All rights reserved.
      </div>
    </footer>
  );
}
