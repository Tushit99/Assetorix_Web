import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import img1 from "./Property-1024x342.jpg";
import img2 from "./ACPL_Property1.jpg";
import video from "./Walkthrough.mp4";
import img3 from "./img3.png";
import img4 from "./Show-home-bedroom_ACPL3.jpg" 
import style from "./Property.module.css";
import ServiceLink from '../Links/ServiceLink';


const PropertyMarketing = () => {
  return (
    <Box w={"90%"} margin={"60px auto 30px auto"} paddingTop={"70px"} display={"flex"} gap={10}>
      <Box textAlign={"justify"} w={"70%"} flex={7} padding={"0px auto"}>
        <img src={img1} alt="property_img" />
        <Heading m={"20px 0"} as='h3' size='lg'> PROPERTY MARKETING </Heading>
        <Heading as='h4' m={"20px 0"} size='md' fontWeight={"400"} > MARKETING OF PROPERTIES BY AMETHEUS HOLDINGS PVT LTD </Heading>
        <Text fontSize={"sm"} m={"20px 0"} >
          Selling houses isn’t easy. There are a myriad of variables that can
          derail a potential sale: the living room’s too small, the garden’s too
          big, the house is too close to the main road, it’s too far from the
          shops, the prospective buyer stubbed his big toe when getting out of
          bed and he’ll be in a bad mood for the rest of the day… You get the
          picture.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          And with increased competition from online commission-free agents,
          it’s never been more important for property developers and estate
          agents to find other ways to stand out from the crowd and win the
          capricious hearts and minds of their ever-more-discerning and
          well-informed potential customers.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Fortunately, we’re here to help. As experienced property marketers,
          working with many reputed real-estate group we have identified five
          future property marketing trends developers must embrace in order to
          secure a competitive edge in this rapidly developing marketplace.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Act Now. By embracing and capitalising upon these emerging trends,
          savvy property developers and estate agents will improve their
          customer targeting, create more engaging content and make the
          house-buying process smoother and more enjoyable for their customers.
          Big win.
        </Text>

        <img src={img2} alt="img2" />
        <Heading as='h4' size='sm' marginTop={"10px"}> 1. VIRTUAL REALITY AND AUGMENTED REALITY </Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          Just in case you don’t know, virtual reality (VR) is the use of
          computer technology to create a simulated environment in which you
          immerse yourself via a headset. Whereas augmented reality (AR)
          overlays digital imagery onto real environments (think Pokemon Go).
          Got it?
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Whilst still in their relative infancy, VR and AR are both significant
          game-changers for the property industry. And it’s not difficult to see
          why.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Imagine a future in which buyers can visit their future home without
          leaving their current one. Imagine the ease this would afford them,
          the time and the money saved by not having to visit twenty homes
          before finding the right one. Well, with VR, you don’t have to
          imagine, as your customers can experience a 3-D walkthrough, one that
          can feature a guided tour or simply allow the viewer to explore at
          their leisure.
        </Text>
        <video width="750" height="500" controls controlsList="nodownload" >
          <source src={video} type="video/mp4" />
        </video>
        <Text fontSize={"sm"} m={"20px 0"} >
          Also, through mapping photography into the VR experience, property
          developers need never show a customer an empty house again. Instead,
          they can dress the property digitally, making it easier for potential
          homebuyers to picture the lifestyle that awaits them. That’s powerful,
          sale-closing stuff.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Similarly, augmented reality can help homebuyers visualise what their
          dream property will look like, removing the guesswork of how their
          furniture will fit in a new property and allowing them to play with
          different decorative styles and furnishings.
        </Text>
        <img src={img3} alt="" />
        <Text fontSize={"sm"} m={"20px 0"} >
          Over the next two years, VR and AR will become an integral part of
          every successful property developer’s marketing strategy. So, our
          advice: look into the possibilities today and get ahead of the virtual
          curve.
        </Text>

        <Heading as='h4' size='sm'>2. SOCIAL LISTENING</Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          Social listening is the process of monitoring online conversations to
          understand what your customers are saying about you and your industry.
          It’s the ultimate market research tool and, as of yet, widely
          underutilised.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          With real-time insights gained from social listening, you can create
          marketing content that appeals to customers’ needs and wishes, as well
          as quickly respond to any positive or negative PR surrounding your
          brand. So, if a significant section of your target audience is talking
          about wanting more ecologically sustainable features in the home, you
          can create content that sells the triple-glazing windows or low-energy
          lighting that your properties offer.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >
          It’s important to note that social listening isn’t just a passive
          digital eavesdropping exercise – you should use it proactively
          yourself. For example, you can find out what people are saying about
          your competitors and find ways to take advantage of any negative PR
          they might be experiencing. You can identify what people love about
          the local area and create content to tap into this popularity. And you
          can use it to discover who the key influencers are in your industry or
          within a certain area and then forge brand partnerships with them to
          strengthen your reputation.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >
          Social listening acts as a direct line into the mindset of your
          potential customers. As such, it’s a hugely powerful property
          marketing tool that should be used to support every aspect of your
          existing marketing strategy.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >If you want to know more, read our social listening blog.</Text>
        {/* <video width="750" height="500" controls controlsList="nodownload" >
          <source src={video} type="video/mp4" />
        </video> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Q1x_wnHR-nM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Heading as='h4' size='sm' marginTop={"10px"}> 3. VIDEO CONTENT </Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          Video content marketing is hardly a new phenomenon, but it makes our
          list because too many property developers and estate agents are
          failing to make of the most of it, preferring still imagery to online
          video tours or remote live home viewings. And if you’re reading this
          and still not sure, the following statistics should convince you.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          If content is king, then video content is the king of kings. Video
          currently accounts for a huge 75% of consumer internet traffic – a
          figure that will rise to 82% by 2021.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >
          Video isn’t just popular, it sticks in the mind, too. As our video
          content marketing blog states, 55% of users consume video content
          thoroughly as opposed to just skimming it, making it the most
          memorable medium going.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >
          According to Eye View Digital, embedding video into your landing pages
          can increase conversion rates by 80%, whilst, Forbes reports that
          social video generates 1200% more shares than text and images
          combined.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          And whilst video content might not be new, property developers still
          have an opportunity to steal a march on the competition by making
          their websites more video-centric and, thus, more engaging. At the
          same time, they should be taking advantage of developments made within
          the medium, such as 360-degree video:
        </Text>

        <Heading as='h4' size='sm'>4. SEO-OPTIMISED CONTENT</Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          But video shouldn’t be the only string to your content marketing bow.
          Along with engaging website content, social media, newsletters and
          blogging, your online presence needs to be a trove of useful,
          interesting information that draws customers in and makes you
          memorable to your audience.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          To help with this, it’s vital that your content is underpinned using
          search engine optimisation (SEO) techniques. SEO helps increase web
          traffic by ensuring your site can be found more easily via search
          engines. This is done by uncovering popular keywords and phrases that
          your target audience is searching for and that are relevant to your
          service offering.
        </Text>

        <Text fontSize={"sm"} m={"20px 0"} >
          You can further prove your credibility to search engines by having
          your work linked on other reputable websites. You might, for example,
          want to ask high-end interior designers who furnish apartments to link
          your blog on their website, which will help both parties from a
          content and SEO perspective. By fostering relationships with a number
          of related brands, you will be able to backlink your work on more
          websites and improve your SEO ranking in the process.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          A friendly reminder: search engines don’t appreciate it when you
          gratuitously cram your content with keywords just for the sake of it.
          So, make sure your writing is relevant and interesting to your readers
          and not a vehicle for SEO spam.
        </Text>

        <Heading as='h4' size='sm'>5. DIGITAL FIRST STRATEGY</Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          In recent years, the property market has started to embrace the
          digital world to help customers facilitate property viewing and
          buying. The growth of Rightmove and Zoopla; the rise of online estate
          agents; the need for a social media presence – all signs that the
          industry recognises that the future is digital.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          And if digital is the new playground for property marketing, it’s
          vital that brands focus their efforts on digital media and consider
          diverting money away from print and TV and putting it into pixels.
          (See here for an example of how TV budgets are being diverted into
          digital..)
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          This isn’t just about maintaining a Twitter-feed or firing out a
          monthly newsletter. Instead, a digital first approach demands the
          wholesale adoption of digital media across all your customer
          touchpoints. So that wherever they roam online, they have easy access
          to your engaging messaging via a responsive and enticing website,
          informative social media feed, educational blog content, 360-degree
          video and immersive VR experiences.
        </Text>
        <img src={img4} alt="" />
        <Heading as='h5' size='sm' marginTop={"10px"}>HOW AMETHEUS CAN HELP?</Heading>

        <Text fontSize={"sm"} m={"20px 0"} >
          Technological and digital innovations are disrupting the property
          development and real estate industries from top to bottom. From VR to
          social listening, 360-degree video to digital first strategies,
          marketers need to embrace the future trends that are already starting
          to mould the industry landscape.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Migrating budgets away from traditional print advertising into
          cross-platform digital advertising campaigns will be key to survival
          and success. In a bid to make the home-buying process as easy and
          enjoyable as possible, property marketers need to be early adopters of
          game-changing technology (VR, AR) and integrate existing strategies
          (SEO, video) in exciting new ways.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Here at Assetorex, our content marketers, video producers, digital
          marketing executives and VR /AR partners create immersive, educational
          content that resonates with home buyers on an emotional and practical
          level. And via social listening and analytics, we can work out what
          content works best for you and target it at your chosen demographics.
        </Text>
        <Text fontSize={"sm"} m={"20px 0"} >
          Whether through the written word or moving picture, via virtual or
          augmented reality, we will maximise your property marketing potential
          and deliver digital-first strategies that speak directly to your
          target audiences – both right now and for years to come. Contact us
          today to find out more. Our Real-Estate web-portal is
          www.assetorix.com
        </Text>
      </Box>
      <Box padding={"0 40px"} display={{base:"none",md:"block"}}  textAlign={"left"} position={"relative"} flex={2}>
        <ServiceLink />
      </Box>
    </Box>
  );
}

export default PropertyMarketing