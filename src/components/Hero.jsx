import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Code, Cloud, Smartphone, Database, Terminal, Layout } from 'lucide-react'

const Hero = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const [hoveredStat, setHoveredStat] = useState(null)
  const [hoveredCompany, setHoveredCompany] = useState(null)
  const [changingText, setChangingText] = useState('Innovation')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [textOpacity, setTextOpacity] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const textIndexRef = useRef(0)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef(null)
  const lastTimeRef = useRef(0)
  const starsRef = useRef([])
  const mouseVelocityRef = useRef({ x: 0, y: 0 })
  const lastMouseMoveRef = useRef(Date.now())

  // Blue color palette (dark to light) - INCREASED OPACITY
  const blueColors = {
    dark: {
      base: 'rgba(30, 58, 138, ', // blue-900
      light: 'rgba(30, 58, 138, 0.25)', // INCREASED
      medium: 'rgba(30, 58, 138, 0.4)', // INCREASED
      dark: 'rgba(30, 58, 138, 0.55)' // INCREASED
    },
    medium: {
      base: 'rgba(59, 130, 246, ', // blue-500
      light: 'rgba(59, 130, 246, 0.25)', // INCREASED
      medium: 'rgba(59, 130, 246, 0.4)', // INCREASED
      dark: 'rgba(59, 130, 246, 0.55)' // INCREASED
    },
    light: {
      base: 'rgba(147, 197, 253, ', // blue-300
      light: 'rgba(147, 197, 253, 0.25)', // INCREASED
      medium: 'rgba(147, 197, 253, 0.4)', // INCREASED
      dark: 'rgba(147, 197, 253, 0.55)' // INCREASED
    },
    cyan: {
      base: 'rgba(6, 182, 212, ', // cyan-500
      light: 'rgba(6, 182, 212, 0.25)', // INCREASED
      medium: 'rgba(6, 182, 212, 0.4)', // INCREASED
      dark: 'rgba(6, 182, 212, 0.55)' // INCREASED
    }
  }

  // Track hero height
  useEffect(() => {
    const updateHeroHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight
        setHeroHeight(height)
      }
    }

    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)

    return () => {
      window.removeEventListener('resize', updateHeroHeight)
    }
  }, [])

  // Initialize stars for background with blue colors only
  useEffect(() => {
    const stars = []
    const starCount = isMobile ? 120 : 300 // INCREASED COUNT

    for (let i = 0; i < starCount; i++) {
      // Select from blue colors only
      const colorSets = [blueColors.dark, blueColors.medium, blueColors.light, blueColors.cyan]
      const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)]

      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // INCREASED SIZE
        baseSize: Math.random() * 3 + 1,
        opacity: 0.2 + Math.random() * 0.8, // INCREASED OPACITY
        twinkleSpeed: 0.002 + Math.random() * 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        depth: 0.2 + Math.random() * 0.8,
        colorSet: colorSet,
        color: colorSet.base
      })
    }

    starsRef.current = stars
  }, [isMobile])

  // Smooth mouse tracking with parallax - INCREASED DISTANCE
  useEffect(() => {
    let rafId = null
    let targetOffset = { x: 0, y: 0 }
    let currentOffset = { x: 0, y: 0 }

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      // Calculate normalized mouse position (0 to 1)
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

      setMousePosition({ x, y })

      // INCREASED parallax offset for farther movement
      targetOffset = {
        x: (x - 0.5) * 80, // INCREASED: Max 80px movement
        y: (y - 0.5) * 80
      }

      mousePosRef.current = { x: e.clientX, y: e.clientY }
      lastMouseMoveRef.current = Date.now()
    }

    const animateParallax = () => {
      // Slower interpolation for smoother, farther movement
      currentOffset.x += (targetOffset.x - currentOffset.x) * 0.025 // Slower interpolation
      currentOffset.y += (targetOffset.y - currentOffset.y) * 0.025

      setParallaxOffset(currentOffset)

      // Gradually return to center when mouse stops
      const timeSinceLastMove = Date.now() - lastMouseMoveRef.current
      if (timeSinceLastMove > 1000) {
        targetOffset.x *= 0.98
        targetOffset.y *= 0.98
      }

      rafId = requestAnimationFrame(animateParallax)
    }

    animateParallax()

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setScrollY(scrollY)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced star field animation with parallax - LIGHT THEME
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId = null

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = heroHeight || window.innerHeight * 3 // Make canvas cover entire hero
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Very subtle white background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate scroll-based offset
      const scrollFactor = scrollY * 0.15 // Increased scroll effect

      starsRef.current.forEach(star => {
        // Apply parallax effect based on star depth
        const parallaxX = parallaxOffset.x * star.depth
        const parallaxY = parallaxOffset.y * star.depth

        // Apply scroll-based movement
        const scrollX = scrollFactor * (star.depth - 0.5) * 0.15

        const x = (star.x / 100) * canvas.width + parallaxX + scrollX
        const y = (star.y / 100) * canvas.height + parallaxY + scrollY * 0.4 * star.depth

        // Twinkle effect
        const time = Date.now() * star.twinkleSpeed
        const twinkle = Math.sin(time + star.twinkleOffset) * 0.5 + 0.5
        const currentSize = star.size * (0.7 + twinkle * 0.4) // Increased twinkle
        const currentOpacity = star.opacity * (0.5 + twinkle * 0.4) // Increased opacity

        // Draw star with subtle glow
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, currentSize * 3 // Increased glow
        )
        gradient.addColorStop(0, star.color + currentOpacity + ')')
        gradient.addColorStop(0.5, star.color + (currentOpacity * 0.4) + ')') // Increased
        gradient.addColorStop(1, star.color + '0)')

        ctx.beginPath()
        ctx.arc(x, y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw star core
        ctx.beginPath()
        ctx.arc(x, y, currentSize * 0.5, 0, Math.PI * 2) // Larger core
        ctx.fillStyle = star.color + (currentOpacity * 0.8) + ')'
        ctx.fill()
      })

      // Draw subtle blue gradient clouds
      drawClouds(ctx)

      animationId = requestAnimationFrame(drawStars)
    }

    const drawClouds = (ctx) => {
      const time = Date.now() * 0.0002 // Slower movement

      // Multiple layered gradient clouds in blue tones
      for (let i = 0; i < 5; i++) { // Increased to 5 clouds
        const offsetX = parallaxOffset.x * 0.25 * (i + 1)
        const offsetY = parallaxOffset.y * 0.25 * (i + 1) + scrollY * 0.2

        // Spread clouds throughout the height
        const yPosition = 0.2 + (i * 0.15)
        const x = canvas.width * (0.1 + i * 0.2) + Math.sin(time * 0.15 + i) * 100 + offsetX
        const y = canvas.height * yPosition + Math.cos(time * 0.2 + i) * 80 + offsetY
        const radius = 180 + Math.sin(time * 0.12 + i) * 40

        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, radius
        )

        // Different blue tones for each cloud layer - INCREASED OPACITY
        const blueTones = [
          ['rgba(30, 58, 138, 0.03)', 'rgba(30, 58, 138, 0.01)', 'transparent'], // Dark blue
          ['rgba(59, 130, 246, 0.025)', 'rgba(59, 130, 246, 0.008)', 'transparent'], // Medium blue
          ['rgba(147, 197, 253, 0.02)', 'rgba(147, 197, 253, 0.006)', 'transparent'], // Light blue
          ['rgba(6, 182, 212, 0.018)', 'rgba(6, 182, 212, 0.005)', 'transparent'], // Cyan
          ['rgba(30, 64, 175, 0.022)', 'rgba(30, 64, 175, 0.007)', 'transparent'] // Another dark blue
        ]

        gradient.addColorStop(0, blueTones[i][0])
        gradient.addColorStop(0.3, blueTones[i][1])
        gradient.addColorStop(1, blueTones[i][2])

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    resizeCanvas()
    drawStars()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [parallaxOffset, scrollY, isMobile, heroHeight])

  // Device detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 150)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Text rotation
  const rotatingTexts = ['Innovation', 'Precision', 'Excellence', 'Quality']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextOpacity(0)
      setTimeout(() => {
        textIndexRef.current = (textIndexRef.current + 1) % rotatingTexts.length
        setChangingText(rotatingTexts[textIndexRef.current])
        setTextOpacity(1)
      }, 200)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  // Floating elements that follow mouse - MORE VISIBLE
  const FloatingElements = () => {
    const [elements, setElements] = useState([])

    // Initialize elements
    useEffect(() => {
      const elementCount = isMobile ? 35 : 70 // DOUBLED COUNT
      const newElements = []

      for (let i = 0; i < elementCount; i++) {
        const baseX = (i * 23) % 100 // Better spread
        const baseY = (i * 14) % 150 // Spread throughout height

        // Select blue color
        const colorSets = [blueColors.dark, blueColors.medium, blueColors.light, blueColors.cyan]
        const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)]

        newElements.push({
          id: i,
          baseX,
          baseY,
          size: 4 + Math.random() * 16, // LARGER SIZES
          depth: 0.2 + Math.random() * 0.8,
          type: Math.floor(Math.random() * 7), // 7 different shapes
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.008, // Slower rotation
          colorSet: colorSet,
          drift: {
            x: (Math.random() - 0.5) * 0.06,
            y: (Math.random() - 0.5) * 0.06
          },
          pulseSpeed: 0.002 + Math.random() * 0.003,
          pulseOffset: Math.random() * Math.PI * 2
        })
      }

      setElements(newElements)
    }, [isMobile])

    // Animation loop for elements
    useEffect(() => {
      let animationId = null

      const animateElements = () => {
        const time = Date.now() * 0.001

        setElements(prev => prev.map(element => {
          // Calculate mouse influence - INCREASED DISTANCE
          const mouseInfluence = 0.12 // REDUCED for farther effect
          const xOffset = (mousePosition.x - 0.5) * 100 * element.depth * mouseInfluence
          const yOffset = (mousePosition.y - 0.5) * 100 * element.depth * mouseInfluence

          // Scroll offset - ENSURE COVERS BOTTOM
          const scrollOffsetY = scrollY * 0.2 * element.depth

          // Calculate position with smooth movement
          const targetX = element.baseX + xOffset + parallaxOffset.x * element.depth * 0.06 + element.drift.x
          const targetY = element.baseY + yOffset + parallaxOffset.y * element.depth * 0.06 + scrollOffsetY + element.drift.y

          // Smooth interpolation
          const currentX = element.x !== undefined ? element.x : element.baseX
          const currentY = element.y !== undefined ? element.y : element.baseY

          const newX = currentX + (targetX - currentX) * 0.02
          const newY = currentY + (targetY - currentY) * 0.02

          // Pulse effect
          const pulse = Math.sin(time * element.pulseSpeed + element.pulseOffset) * 0.5 + 0.5
          const pulseSize = element.size * (0.85 + pulse * 0.3) // Increased pulse

          // Rotation
          const newRotation = element.rotation + element.rotationSpeed

          return {
            ...element,
            x: newX,
            y: newY,
            rotation: newRotation,
            currentSize: pulseSize
          }
        }))

        animationId = requestAnimationFrame(animateElements)
      }

      if (elements.length > 0) {
        animationId = requestAnimationFrame(animateElements)
      }

      return () => {
        if (animationId) cancelAnimationFrame(animationId)
      }
    }, [mousePosition, parallaxOffset, scrollY, elements.length])

    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ height: '100%' }}>
        {elements.map((element) => {
          const x = element.x || element.baseX
          const y = element.y || element.baseY

          const style = {
            left: `${x}%`,
            top: `${y}%`,
            width: `${element.currentSize || element.size}px`,
            height: element.type === 6 ? '2px' : `${element.currentSize || element.size}px`, // Line is different
            opacity: 0.12 + element.depth * 0.18, // INCREASED OPACITY
            transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
            transformOrigin: 'center',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform, left, top',
            position: 'absolute'
          }
        })}
      </div>
    )
  }

  // Features
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Design',
      description: 'Clean aesthetics with cutting-edge UI/UX',
      color: '#1E40AF' // Dark blue
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Efficient',
      description: 'Optimized performance & seamless experience',
      color: '#3B82F6' // Blue
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure',
      description: 'Enterprise-grade security & protection',
      color: '#06B6D4' // Cyan
    }
  ]

  // Stats
  const stats = [
    {
      value: '100+',
      label: 'Projects',
      description: 'Successfully delivered worldwide',
      color: '#1E40AF',
      icon: '🚀'
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Guaranteed reliability & performance',
      color: '#3B82F6',
      icon: '⚡'
    },
    {
      value: '50+',
      label: 'Clients',
      description: 'Trusted global partnerships',
      color: '#06B6D4',
      icon: '🌟'
    }
  ]

  // Services
  const services = [
    {
      name: 'Web Development',
      description: 'Modern web applications with cutting-edge technology',
      icon: <Layout className="w-7 h-7" />,
      color: '#1E40AF',
      features: ['React/Next.js', 'Responsive Design', 'API Integration']
    },
    {
      name: 'Mobile Apps',
      description: 'Native & cross-platform mobile solutions',
      icon: <Smartphone className="w-7 h-7" />,
      color: '#3B82F6',
      features: ['iOS & Android', 'Flutter/React Native', 'App Store Ready']
    },
    {
      name: 'Security Solutions',
      description: 'Comprehensive security & data protection',
      icon: <Shield className="w-7 h-7" />,
      color: '#06B6D4',
      features: ['Threat Protection', 'Data Encryption', 'Compliance']
    }
  ]

  const companies = [
    {
      name: 'NovaTech',
      color: '#1E40AF',
      logo: 'NT',
      description: 'Tech Solutions'
    },
    {
      name: 'Quantum',
      color: '#3B82F6',
      logo: 'Q',
      description: 'AI Research'
    },
    {
      name: 'Synapse',
      color: '#06B6D4',
      logo: 'S',
      description: 'Data Analytics'
    },
    {
      name: 'Aether',
      color: '#93C5FD',
      logo: 'A',
      description: 'Cloud Services'
    }
  ]

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-blue-100/30"
    >
      {/* Star field canvas - COVERS ENTIRE HERO */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ height: '100%' }}
      />

      {/* Floating elements - COVERS ENTIRE HERO */}
      <FloatingElements />

      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 z-50"
        style={{
          width: `${scrollProgress * 100}%`,
        }}
      />

      {/* Main Content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="pt-20 md:pt-28 lg:pt-32 pb-60"> {/* INCREASED BOTTOM PADDING */}

          {/* Hero Header */}
          <div className="text-center mb-24 md:mb-32"> {/* INCREASED MARGIN */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-full mb-12 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent">
                ELEGANT DIGITAL SOLUTIONS
              </span>
              <ArrowRight className="w-3 h-3 text-blue-600 ml-1" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Crafting Digital
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Solutions That Scale
                </span> <br />
                For Tomorrow's Challenges

              </h1>

              <div className="text-xl md:text-2xl text-gray-800 mb-12">
                We Provide{' '}
                <span className="relative inline-block min-w-[120px] h-[28px] align-middle">
                  <motion.span
                    key={changingText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: textOpacity, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 right-0 font-medium"
                    style={{
                      background: 'linear-gradient(135deg, #1E40AF, #3B82F6, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {changingText}
                  </motion.span>
                </span>
                {' '}In Every Projects
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                We create thoughtful digital solutions that blend modern technology
                with elegant design, helping businesses thrive in the digital era.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-800 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/95 backdrop-blur-sm border border-blue-300/80 text-blue-700 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-400/80 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                View Work
              </motion.button>
            </motion.div>

            
          </div>

          

          {/* Services - PREMIUM CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-28 md:mb-36"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Our <span className="font-normal bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Tailored solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="relative group"
                >
                  {/* Glassmorphism Service Card */}
                  <div className="relative p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-xl" />
                    </div>

                    {/* Floating Background Elements */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-500/5 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500/5 to-blue-600/5 blur-3xl group-hover:scale-150 transition-transform duration-1000" />

                    <div className="relative z-10">
                      {/* Icon Container with Glow */}
                      <motion.div
                        animate={{
                          rotate: hoveredService === index ? 360 : 0,
                          scale: hoveredService === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-8 mx-auto"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                          boxShadow: `0 10px 40px ${service.color}25, inset 0 2px 0 ${service.color}10`
                        }}
                      >
                        <div
                          className="text-2xl"
                          style={{ color: service.color }}
                        >
                          {service.icon}
                        </div>
                        {/* Icon Halo */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                          style={{ backgroundColor: service.color }}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:translate-y-1 transition-transform duration-300">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base mb-8 text-center leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                          color: service.color,
                          border: `1px solid ${service.color}30`
                        }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ backgroundColor: service.color }} />
                    <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full" style={{ backgroundColor: service.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Additional space at bottom for elements to flow */}
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent rounded-full" />
          <span className="text-xs text-gray-600 mt-3 tracking-wider font-medium">SCROLL TO EXPLORE</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero