export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-800 pt-10 pb-5">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            
            
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p>Uzbekistan</p>
              <p>+998 91 101 01 01</p>
              <p>demo@exampledemo.com</p>
              <p>Dji Demo Store</p>
              <p>No, 12345 Freedom Tashkent</p>
            </div>
  
            
            <div>
              <h3 className="font-bold mb-2">Information</h3>
              <ul className="space-y-1">
                <li>Product Support</li>
                <li>Checkout</li>
                <li>License Policy</li>
                <li>Affiliate</li>
              </ul>
            </div>
  
            
            <div>
              <h3 className="font-bold mb-2">Customer Service</h3>
              <ul className="space-y-1">
                <li>Help Centre</li>
                <li>Raddem Voucher</li>
                <li>Contact Us</li>
                <li>Policies & Rules</li>
              </ul>
            </div>
  
            
            <div>
              <h3 className="font-bold mb-2">Download Our App</h3>
              <p className="text-sm">Download our App & get extra 20% Discount on your first Order...!</p>
              <div className="flex gap-2 mt-3">
                <img src="/google-play.png" alt="Google Play" className="h-10" />
                <img src="/app-store.png" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>
  
          
          <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="h-6" />
              <p>Copyright &copy; Team90Degree | Built with Dji by Team90Degree.</p>
            </div>
            <div className="flex gap-3 mt-3 md:mt-0">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  