import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/heroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Loader from '../../components/loader/loader'

function home() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
    </Layout>
  )
}

export default home