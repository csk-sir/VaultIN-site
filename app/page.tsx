import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Smartphone, Globe, Zap, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-semibold text-gray-900">VaultIN</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#security" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
              Sign In
            </Button>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 py-24 mx-auto max-w-7xl lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 mb-8">
                <Lock className="mr-2 h-4 w-4" />
                Military-grade encryption
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Your passwords.
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Perfectly protected.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Experience the future of password security. Advanced encryption meets effortless simplicity in the most
                secure password manager ever created.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 px-8 py-4 text-base bg-transparent">
                  Watch Demo
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">Free 14-day trial • No credit card required</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl px-4">
            <div className="relative rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-50 p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="VaultIN Dashboard"
                width={1000}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Security that thinks ahead
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Every feature designed with your privacy and security as the foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero-Knowledge Architecture</h3>
                  <p className="text-gray-600">
                    Your data is encrypted before it leaves your device. We can't see your passwords, even if we wanted
                    to.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Sync</h3>
                  <p className="text-gray-600">
                    Access your passwords instantly across all devices with real-time synchronization.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Biometric Security</h3>
                  <p className="text-gray-600">
                    Unlock with Face ID, Touch ID, or fingerprint. Your biometrics never leave your device.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Sharing</h3>
                  <p className="text-gray-600">
                    Share passwords securely with family and team members using end-to-end encryption.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dark Web Monitoring</h3>
                  <p className="text-gray-600">
                    Get alerted immediately if your credentials appear in data breaches or on the dark web.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Lock className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Password Generator</h3>
                  <p className="text-gray-600">
                    Generate unbreakable passwords with customizable length and complexity requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-24 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 mb-6">
                  <Shield className="mr-2 h-4 w-4" />
                  Enterprise-grade security
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Built for the most security-conscious organizations
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our security architecture is designed to protect against the most sophisticated attacks, with multiple
                  layers of encryption and zero-trust principles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AES-256 Encryption</h4>
                      <p className="text-gray-600">
                        The same encryption standard used by governments and militaries worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">SOC 2 Type II Certified</h4>
                      <p className="text-gray-600">
                        Independently audited and certified for security, availability, and confidentiality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Security Audits</h4>
                      <p className="text-gray-600">
                        Continuous penetration testing and security assessments by leading firms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Security Dashboard"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900">
          <div className="container px-4 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to secure your digital life?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join millions of users who trust VaultIN to protect their most important credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-0 text-gray-900 placeholder:text-gray-500"
              />
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 whitespace-nowrap">
                Start Free Trial
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container px-4 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-gray-900" />
              <span className="font-semibold text-gray-900">VaultIN</span>
            </div>
            <p className="text-sm text-gray-600 mt-4 sm:mt-0">
              © {new Date().getFullYear()} VaultIN All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
