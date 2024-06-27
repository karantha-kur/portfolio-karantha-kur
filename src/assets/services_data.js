import fft from '../assets/fft.gif'
import ta from '../assets/ta.gif'
import pp from '../assets/petroleumprice.gif'
import mcs from '../assets/mcs.gif'
import apa from '../assets/apa.gif'
import ds from '../assets/ds.gif'

const Services_Data = [
    {
        s_no:"01",
        s_name:"Text Data Summariser",
        s_desc:"Conceptualised and deployed a Chrome Extension from scratch utilising Hugging Face Transformer and Flask API",
        s_img: ds, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
    {
        s_no:"02",
        s_name:"Analysis of Technical Indicators",
        s_desc:"Built functions from scratch to demonstrate Technical Analysis and generate buy/sell signals on OHLCAV data to give optimal returns",
        s_img: ta, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
    {
        s_no:"03",
        s_name:"Monte Carlo Simulation",
        s_desc:"Applied Monte Carlo Simulation and backtesting to price options for multiple companies and further calculates Value at Risk (VaR) an Conditional Value at Risk (CVaR)",
        s_img: mcs, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
    {
        s_no:"04",
        s_name:"Financial Signal Analysis Using FFT",
        s_desc:"Implemented Fast Fourier Transform (FFT) algorithm to perform denoising of financial data to reveal underlying trends",
        s_img: fft, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
    {
        s_no:"05",
        s_name:"Petroleum Price Estimator",
        s_desc:"Build an ML model to predict the price of a barell of oil in USD. Further deployed it with the help of Flask API",
        s_img: pp, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
    {
        s_no:"06",
        s_name:"Amazon Product Analysis",
        s_desc:"Analysed over a 1,000 data points from Amazon Marketplace and identified the most popular product categories to break into",
        s_img: apa, 
        s_href: 'https://github.com/Nimish-4/Data-Summarizer'
    },
]
 
export default Services_Data;