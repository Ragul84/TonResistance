import React from 'react'
import Header from './Header'

const Learn = () => {
  const cryptoSafetyTips = [
    'Never share your wallet seed phrase with anyone, no matter the circumstance.',
    'Be cautious of random messages claiming to be from support staff; verify their legitimacy first.',
    'Check the liquidity pool (LP) status - burnt or locked LP tokens provide added security.',
    'Always verify if the token is non-mintable to prevent developers from creating infinite tokens.',
    'Use hardware wallets for long-term storage of your cryptocurrencies.',
    'Enable two-factor authentication (2FA) wherever possible for added security.',
    'Regularly update your antivirus and anti-malware software to protect against potential threats.',
    'Avoid clicking on suspicious links or downloading files from untrusted sources.',
    'Double-check website URLs and ensure they are secure (HTTPS) before entering sensitive information.',
    'Research and verify the reputation of exchanges and platforms before trading or investing.',
    'Diversify your investments across different cryptocurrencies and projects to minimize risk.',
    'Stay informed about the latest security threats and best practices in the crypto community.',
    'Consider using a VPN (Virtual Private Network) to encrypt your internet connection and enhance privacy.',
    'Be skeptical of promises of guaranteed returns or get-rich-quick schemes; if it sounds too good to be true, it probably is.',
    'Keep your software and wallets up to date with the latest patches and security fixes.',
    'Regularly review your transaction history and account activity for any unauthorized or suspicious activity.',
    'Use strong, unique passwords for each of your accounts and consider using a password manager to securely store them.',
    'Exercise caution when participating in Initial Coin Offerings (ICOs) or token sales; research the project thoroughly before investing.',
    'Avoid sharing too much personal information on social media platforms, as it could make you a target for phishing attacks.',
    'Stay vigilant and trust your instincts; if something feels off, take the necessary precautions.',
  ]

  function randomTip() {
    return cryptoSafetyTips[Math.floor(Math.random() * cryptoSafetyTips.length)]
  }
  return (
    <>
      <div className="learn ">
        <div className="container p-3">
          <div className="card-title text-center text-gray-500 text-sm">
            Crypto safety starts with daily Tips from Resistance Hub
          </div>
          <div className="card cursor-pointer bg-dark p-3 text-white ">
            <div className="heading underline font-extrabold text-3xl text-center text-orange-300">
              TIP OF THE DAY
            </div>
            <div className="card-image mt-7 text-center min-h-24">
              <div className="text-md">{randomTip()}</div>
            </div>
            <div className="buttons flex justify-center">
              <div className="btn bg-yellow-600 me-2 rounded-lg hover:bg-yellow-700 card-footer">
                Check In
              </div>
              <div className="btn rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Learn
