import { useState } from "react";

function FooterComponent() {

    const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(email); // Print the email to the console
  };
  return (
    

<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
          <img src="/new_logo.svg" alt=" logo" className="max-h-24  "/>
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
        RK Realtors & Tax Consultants provide a comprehensive solution for all your real estate and business consulting needs. 
        </p>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="https://www.facebook.com/people/RK-Realtors-Consultants/61553086431936/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 hover:text-blue-500"
            >
              <span className="sr-only">Facebook</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/rkrealtors.consultancies?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 hover:text-red-500"
            >
              <span className="sr-only">Instagram</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/rk-realtors-and-tax-consultants/about/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-95  hover:text-blue-900"
            >
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Intellectual Property Rights (IPR)</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Start a Business</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> ISO Certifications  </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">Entity Conversions </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> View All Services</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm text-gray-900 ">
          <li><a className="text-medium hover:text-gray-700 hover:opacity-75" href="https://www.gst.gov.in/" target="_blank">www.gst.gov.in</a></li>
                        <li><a className="text-medium  hover:text-gray-700 hover:opacity-75" href="http://www.mca.gov.in/" target="_blank">www.mca.gov.in</a></li>
                        <li><a className="text-medium  hover:text-gray-700 hover:opacity-75" href="https://www.icai.org/" target="_blank">www.icai.org</a></li>
                        <li><a className="text-medium  hover:text-gray-700 hover:opacity-75" href="https://www.icsi.edu/home/" target="_blank">www.icsi.edu</a></li>
                        <li><a className="text-medium  hover:text-gray-700 hover:opacity-75" href="https://www.rbi.org.in/" target="_blank">www.rbi.org.in</a></li>
                        <li><a className="text-medium  hover:text-gray-700 hover:opacity-75" href="https://dgft.gov.in/" target="_blank">www.dgft.gov.in</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center">
    <p className="text-xs text-gray-500">&copy; 2023. RK Realtors & Consultants . All rights reserved.</p>
    <a href="https://valenceware.com/" className="text-xs text-gray-500">Developed & maintained by Valenceware</a>

    </div>

    
  </div>
</footer>
  )
}

export default FooterComponent ; 