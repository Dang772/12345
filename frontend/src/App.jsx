import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Download, Video, Eye, Heart, Share2, Loader2 } from 'lucide-react'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [videoUrl, setVideoUrl] = useState('')
  const [videoData, setVideoData] = useState(null)
  const [selectedQuality, setSelectedQuality] = useState('1080p')
  const [loading, setLoading] = useState(false)
  const [showFullScreenAd, setShowFullScreenAd] = useState(false)

  // Detect country from IP and set language
  useEffect(() => {
    const detectCountryAndSetLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code
        
        if (countryCode === 'TH') {
          i18n.changeLanguage('th')
        } else if (countryCode === 'MM') {
          i18n.changeLanguage('my')
        } else {
          i18n.changeLanguage('en')
        }
      } catch (error) {
        console.error('Failed to detect country:', error)
        i18n.changeLanguage('en')
      }
    }
    
    detectCountryAndSetLanguage()
  }, [i18n])

  const handleCheck = async () => {
    if (!videoUrl.includes('tiktok.com')) {
      alert(t('tiktok_only'))
      return
    }

    setLoading(true)
    
    try {
      // Call backend API
      const response = await fetch('/api/tiktok/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl })
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch video info')
      }
      
      const data = await response.json()
      
      // Format numbers
      const formatCount = (count) => {
        if (count >= 1000000) {
          return (count / 1000000).toFixed(1) + 'M'
        } else if (count >= 1000) {
          return (count / 1000).toFixed(1) + 'K'
        }
        return count.toString()
      }
      
      setVideoData({
        thumbnail: data.thumbnail || 'https://via.placeholder.com/400x600/FF0050/FFFFFF?text=TikTok+Video',
        owner: data.owner || '@unknown',
        views: formatCount(data.views || 0),
        likes: formatCount(data.likes || 0),
        shares: formatCount(data.shares || 0)
      })
      setLoading(false)
    } catch (error) {
      console.error('Error fetching video info:', error)
      // Fallback to demo data if API fails
      setVideoData({
        thumbnail: 'https://via.placeholder.com/400x600/FF0050/FFFFFF?text=TikTok+Video',
        owner: '@example_user',
        views: '2.5M',
        likes: '320K',
        shares: '15K'
      })
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    // Show full-screen ad before download
    setShowFullScreenAd(true)
    
    setTimeout(async () => {
      setShowFullScreenAd(false)
      
      try {
        // Call backend API to download
        const response = await fetch('/api/tiktok/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            url: videoUrl,
            quality: selectedQuality 
          })
        })
        
        if (!response.ok) {
          throw new Error('Failed to download video')
        }
        
        // Trigger file download directly
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tiktok_video_${Date.now()}.mp4`; // You might want to get the actual filename from headers
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        alert(t('download_success') || `Video download initiated!`);
      } catch (error) {
        console.error('Error downloading video:', error);
        alert(t('download_failed') || `Failed to download video. Please try again.`);
      }
    }, 3000)
  }

  const formatNumber = (num) => {
    return num
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Full Screen Ad Modal */}
      {showFullScreenAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="text-center">
            <div className="mb-4">
              <Loader2 className="w-16 h-16 animate-spin text-pink-500 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t('full_screen_ad')}
            </h2>
            <p className="text-gray-400">Please wait...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="py-8 px-4 text-center border-b border-gray-800">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Video className="w-10 h-10 text-pink-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            TikTok Downloader
          </h1>
        </div>
        <p className="text-gray-400 mt-2">{t('welcome')}</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Input Section */}
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-white">{t('paste_link')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="https://www.tiktok.com/@user/video/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button 
                onClick={handleCheck}
                disabled={loading}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : t('check_button')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Video Ad Section (Replacing Platform Selection) */}
        <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-pink-400">{t('ad_section')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
              <div className="text-center">
                <Video className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-500">Video Advertisement Space</p>
                <p className="text-sm text-gray-600 mt-1">728x90 or 16:9 Video Ad</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Info Section */}
        {videoData && (
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm mb-6 animate-fade-in">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Thumbnail */}
                <div>
                  <img 
                    src={videoData.thumbnail} 
                    alt={t('video_thumbnail')}
                    className="w-full rounded-lg border-2 border-pink-500/30"
                  />
                </div>

                {/* Video Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400 mb-2">{t('owner_name')}</h3>
                    <p className="text-white">{videoData.owner}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <Eye className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{t('views_count')}</p>
                      <p className="text-white font-semibold">{videoData.views}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <Heart className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{t('likes_count')}</p>
                      <p className="text-white font-semibold">{videoData.likes}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <Share2 className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{t('shares_count')}</p>
                      <p className="text-white font-semibold">{videoData.shares}</p>
                    </div>
                  </div>

                  {/* Quality Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      {t('quality_selection')}
                    </label>
                    <Select value={selectedQuality} onValueChange={setSelectedQuality}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="4k" className="text-white">{t('4k_uhd')}</SelectItem>
                        <SelectItem value="1080p" className="text-white">{t('1080p_fhd')}</SelectItem>
                        <SelectItem value="720p" className="text-white">{t('720p_hd')}</SelectItem>
                        <SelectItem value="360p" className="text-white">{t('360p_sd')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Download Button */}
                  <Button 
                    onClick={handleDownload}
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-6"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t('download_button')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Small Ad Section - Popular Apps */}
        <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-blue-400 text-sm">{t('recommended_apps') || 'Recommended Apps'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[ 
                { name: 'ChatGPT', color: 'from-green-500 to-teal-500', url: 'https://play.google.com/store/apps/details?id=com.openai.chatgpt' },
                { name: 'Google Gemini', color: 'from-blue-500 to-purple-500', url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.bard' },
                { name: 'WhatsApp', color: 'from-green-600 to-green-400', url: 'https://play.google.com/store/apps/details?id=com.whatsapp' },
                { name: 'CapCut', color: 'from-pink-500 to-purple-500', url: 'https://play.google.com/store/apps/details?id=com.lemon.lvoverseas' }
              ].map((app, i) => (
                <a 
                  key={i} 
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-gray-700 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-lg mx-auto mb-2 group-hover:scale-110 transition-transform`}></div>
                  <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{app.name}</p>
                  <p className="text-[10px] text-gray-600 mt-1">Free</p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Website Description */}
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-white">{t('website_description_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('website_description_text')}
            </p>
          </CardContent>
        </Card>

        {/* Additional Ad Section 1 */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-purple-400">{t('ad_section_2')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
              <div className="text-center">
                <Video className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-500">Additional Video Ad Space</p>
                <p className="text-sm text-gray-600 mt-1">300x250 or 1:1 Ad</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Ad Section 2 */}
        <Card className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border-blue-500/30 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-blue-400">{t('ad_section_3')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
              <div className="text-center">
                <Video className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-500">Another Ad Space</p>
                <p className="text-sm text-gray-600 mt-1">300x600 or 1:2 Ad</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-gray-800 mt-12">
        <p className="text-sm text-gray-500">{t('disclaimer')}</p>
        <p className="text-xs text-gray-600 mt-2">© 2025 TikTok Downloader</p>
      </footer>
    </div>
  )
}

export default App

