import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://i.imgur.com/vyqN8Ij.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#704cc3] rounded-lg mr-5 text-white hover:bg-[#8871bd] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () =>{
    return(
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.contentWrapper}>
              <div className={style.copyContainer}>
                <div className={style.title}>
                  Discover, collect, and sell extraordinary Designs
                </div>
                <div className={style.description}>
                  DesignTounsi is the Best first and largest Digital design marketplace in Tunisia
                </div>
                <div className={style.ctaContainer}>
                  <button className={style.accentedButton}>Explore</button>
                  <button className={style.button}>Create</button>
                </div>
              </div>
              <div className={style.cardContainer}>
                  <br></br>
                <img
                  className="rounded-t-lg"
                  src="https://i.imgur.com/lrtIKVP.png"
                  alt=""
                />
                <div className={style.infoContainer}>
                  <img
                    className="h-[2.25rem] rounded-full"
                    src="https://i.imgur.com/VBbncd5.png?1"
                    alt=""
                  />
                  <div className={style.author}>
                    <div className={style.name}>Drissi</div>
                    <a
                      className="text-[#1868b7]"
                      href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                    >
                      @drissi2002
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )
}



export default Hero