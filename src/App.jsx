import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-nutanics-light/50 to-nutanics-light z-0"></div>
      
      {/* Floating Shapes */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-nutanics-blue/20 rounded-full floating-shape animate-float"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-nutanics-dark/10 rounded-full floating-shape animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-nutanics-blue/10 rounded-full floating-shape animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Clients />
        {/* <Technology /> */}
        <Contact />
        <Footer />
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-nutanics-blue to-nutanics-dark text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-bounce-slow z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}

export default App