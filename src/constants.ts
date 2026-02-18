import { QuarterData } from './types';

export const APP_CONFIG = {
  submissionLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVvqH6d0UQDVWJMw3IiZ4Ef9ho5ysEgZvnKF7Je1t4K7yGIQ/viewform?usp=header",
};

export const QUARTER_DATA: QuarterData[] = [
  {
    id: 'q1-2025',
    label: 'Q1 2025',
    isActive: false,
    categories: [
      {
        id: 'c1',
        title: 'Best Kickoff Call',
        iconName: 'Users',
        colorTheme: 'blue',
        segments: ['client-relationship'],
        winner: {
          name: 'Mukund Mishra',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/D7C6C9D01E204DCB88270A8FF5B14586?start=0&ro_company_id=36638286' }
          ],
          descriptionPoints: [
            'Set the tone with clear expectations and partnership alignment.',
            'Sharp commercial focus (along with CS), tying everything to real KPIs.',
            'Strong collaboration led to a strategic, well-aligned kickoff.'
          ]
        }
      },
      {
        id: 'c2',
        title: 'Best SEO Pitch Call',
        iconName: 'Search',
        colorTheme: 'blue',
        segments: ['demo'],
        winner: {
          name: 'Liana Halpern',
          links: [
             { label: 'View Call Recording', url: 'https://similarweb.zoom.us/rec/share/4NvpL_tWNp8hFhlkhFgPDv6api4TQWGCAPcEEitH_EZEczuIzh35j3YViOxlCOXO.TkVlmoVuJGM7SJ98' }
          ],
          descriptionPoints: [
            'Clearly articulated tool differences & Google\'s methodology.',
            'Structured flow and sharp questioning from the start.',
            'Steered conversation toward client needs and platform gaps.',
            'Contextualized features to directly address client pain points.',
            'Confident, expert delivery throughout.'
          ]
        },
        runnerUp: {
          name: 'Shiran Maimon',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/3D3BE7869E8F498B8DE2CE078F0245C3?modal=share&source=post_call_email_share&ro_company_id=114017025' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'c3',
        title: 'Best CPG Industry Insights',
        iconName: 'BarChart',
        colorTheme: 'blue',
        segments: ['insights'],
        winner: {
          name: 'Esther Rogers',
          links: [
            { label: 'View Presentation', url: 'https://docs.google.com/presentation/d/1_OfHEf_9W3zIZnOIAM9jzitlgKI69gfQkiplBf4a6wg/edit#slide=id.g2d7a2469dee_0_338' }
          ],
          descriptionPoints: [
            'Combined web + shopper data for a full-spectrum view.',
            'Product-agnostic approach showcased broad value.',
            'Used sharp, credible language.',
            'Demonstrated deep industry knowledge.',
            'Shared use cases that were relevant across industries without generalizing.'
          ]
        }
      },
      {
        id: 'c4',
        title: 'Best Success Plan',
        iconName: 'Target',
        colorTheme: 'blue',
        segments: ['client-relationship'],
        winner: {
          name: 'Sohang Mathur',
          links: [
            { label: 'Discovery Call', url: 'https://chorus.ai/meeting/AFBF92FBEDB2424089BB2D41AE2BD5CB?ro_company_id=1461214' },
            { label: 'Success Plan Deck', url: 'https://docs.google.com/presentation/d/1TVsIylcA3Pn4yU5nszaFTielrhWZ5xei7orldETIzpw/edit?slide=id.g2f077001eb2_0_0#slide=id.g2f077001eb2_0_0' },
            { label: 'Post SP Call', url: 'https://chorus.ai/meeting/02C7CA95613A4266B6A0B7821E2FC860?ro_company_id=1461214' },
            { label: 'Client Tracking Sheet', url: 'https://docs.google.com/spreadsheets/d/1GE3xSOiRJpEx84ERTFKPnNnriUQzNwSBd81Ik9LEDTE/edit?gid=0#gid=0' }
          ],
          descriptionPoints: [
            'Prepared the client to arrive with clear priorities—strong setup.',
            'Built great rapport, leading to open conversations around KPIs and goals.',
            'Asked thoughtful, well-structured questions that spoke directly to client needs.',
            'Uncovered key KPIs & Surfaced strategic risks.',
            'Balanced ownership—framed the success plan as a shared responsibility.',
            'Expertise and consultative value clearly came through.'
          ]
        },
        runnerUp: {
          name: 'Liana Halpern',
          links: [
            { label: 'Discovery Call', url: 'https://hello.chorus.ai/listen?guid=33b0faf51de14bd6a96d7b6b7fc5ad4b' },
            { label: 'Success Plan Deck', url: 'https://docs.google.com/presentation/d/17-Ss6NLxXwiHeeakoMbBCaWZPhIk2qUdbDdN70kPWyw/edit?usp=sharing' },
            { label: 'Finalizing SP Call', url: 'https://hello.chorus.ai/listen?guid=d4c2450fde99423c83be3f32743af50c' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'c5',
        title: 'Best SI Demo',
        iconName: 'Presentation',
        colorTheme: 'blue',
        segments: ['si', 'demo'],
        winner: {
          name: 'Matvey Kreymerman',
          links: [
            { label: 'View Demo Recording', url: 'https://hello.chorus.ai/listen?guid=08f870a4f77f44c4ad4c80a934bc594b&ro_company_id=560599382' }
          ],
          descriptionPoints: [
            'Linked product features directly to real customer challenges.',
            'Delivered an engaging, conversational demo—not a scripted walkthrough.',
            'Showed deep product expertise and handled questions smoothly.',
            'Highly tailored to the client\'s specific use case.',
            'Demonstrated strong SI knowledge and professionalism throughout.'
          ]
        }
      },
      {
        id: 'c6',
        title: 'Best API Activation Call',
        iconName: 'Zap',
        colorTheme: 'blue',
        segments: ['demo'],
        winner: {
          name: 'Delaney Macdonald',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=2247f8abaa6d47c2bb68712291fdedf9' }
          ],
          descriptionPoints: [
            'Strong start with simple, familiar visuals.',
            'Clear, value-driven messaging using key triggers like automation & integration.',
            'Great explanation of API flexibility with real examples.',
            'Inspiring narrative that sparked client ideas.',
            'Smart engagement—turned conversation back to client.',
            'Personalized recognition & focused on just two key metrics.'
          ]
        },
      },
      {
        id: 'c7',
        title: 'Best OCEAN Cold Call',
        iconName: 'Mic',
        colorTheme: 'blue',
        segments: ['sales'],
        winner: {
          name: 'Ryan Melley',
          links: [
            { label: 'View Call Recording', url: 'https://recordings.salesloft.com/c/8387/228ab220-fab2-4f8d-808a-575e9ee64a8d' }
          ],
          descriptionPoints: [
            'Showed strong command of the client context.',
            'Confident delivery secured a meeting early on.',
            'Maintained focused messaging to qualify and spark interest.'
          ]
        }
      },
      {
        id: 'c8',
        title: 'Best Personalisation',
        iconName: 'Users',
        colorTheme: 'blue',
        segments: ['sales'],
        winner: {
          name: 'Cristina Webb',
          links: [
            { label: 'View Collateral', url: 'https://docs.google.com/document/d/1MSzpaRCqzVrDqKWjhd6lGqYSz6O0WCX4QxjVcPlv-C0/edit?tab=t.0' }
          ],
          descriptionPoints: [
            'Deep collaboration with CSM for client research.',
            'Tailored messaging to industry trends and company-specific insights.',
            'Spoke directly to the client priorities and language.',
            'Created high-relevance outreach that resonated.'
          ]
        }
      },
      {
        id: 'c9',
        title: 'Best Discovery Call',
        iconName: 'Search',
        colorTheme: 'blue',
        segments: ['client-relationship'],
        winner: {
          name: 'Tim Lozeau',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/B682DC0065564CAD9954DC49B6352F58?ro_company_id=91504888' }
          ],
          descriptionPoints: [
            'Strong opening tonality and pace matching.',
            'Nailed key info: user count, lookback, focus categories.',
            'Identified primary target.',
            'Uncovered timeline, blockers, and buyer journey.',
            'Started pricing discussion early.',
            'Booked FFC with full team for demo & pricing.'
          ]
        }
      },
      {
        id: 'c10',
        title: 'Best Churn Flip Tactic',
        iconName: 'Crown',
        colorTheme: 'orange',
        segments: ['client-relationship'],
        winner: {
          name: 'Svetlana Goldin',
          links: [
            { label: 'View Strategy Doc', url: 'https://docs.google.com/document/d/1hdJAdWsHFZ_XJQ7NIJUhFhXWZYlEMgwIMIA2IzRquLY/edit?tab=t.0' }
          ],
          descriptionPoints: [
            'Refused to accept churn—even after client announced it.',
            'Escalated urgency, ensuring a meeting happened while she is OOO.',
            'Reframed value with Stock Intelligence fit.',
            'Leveraged strong co-founder relationship.',
            'Flipped churn into $80K expansion.'
          ]
        }
      }
    ]
  },
  {
    id: 'q2-2025',
    label: 'Q2 2025',
    isActive: false,
    categories: [
      {
        id: 'q2-c1',
        title: 'Best Search Keyword Research Pitch',
        iconName: 'Search',
        colorTheme: 'blue',
        segments: ['demo'],
        winner: {
          name: 'Shiran Maimon',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=b1e398ccfeca40939775e91e5be99de9&ro_company_id=29245649' },
            { label: 'View Deck', url: 'https://docs.google.com/presentation/d/14q-frmxS704xBKdY5A-jsQ61rlnqipT4wW4F2GA03-0/edit?usp=sharing' }
          ],
          descriptionPoints: [
            'Demonstrates strong expertise in keyword research, guiding the client effectively through a structured approach.',
            'Transitioned smoothly from initial keyword lists to strategic insights.',
            'The use of the agent was well incorporated into the workflow.',
            'Great approach in maintaining the keyword lists up to date.',
            'Tip (Baruch Toledano): Encourage the client to share their most recent and relevant keyword lists to boost engagement.',
            'Tip (Baruch Toledano): Emphasize the significance of zero-click data in relation to volume and clicks.',
            'Tip (Baruch Toledano): Leverage Website Explorer to explore keywords within specific folders or pages.'
          ]
        }
      },
      {
        id: 'q2-c2',
        title: 'Best Apps Demo',
        iconName: 'Zap',
        colorTheme: 'blue',
        segments: ['demo'],
        winner: {
          name: 'Lucas Windhage',
          links: [
            { label: 'View App Demo', url: 'https://chorus.ai/meeting/E8615F775AC34717AD55669F4FC6C16A' }
          ],
          descriptionPoints: [
            'Note: The provided link features a detailed app demo created by Andrea.'
          ]
        }
      },
      {
        id: 'q2-c3',
        title: 'Best Shopper/Cross Retail IQ Upsell',
        iconName: 'BarChart',
        colorTheme: 'blue',
        segments: ['shopper', 'demo'],
        winner: {
          name: 'Esther Rogers',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=65ba08d3a8f6421887f099bcc621d1ca' }
          ],
          descriptionPoints: [
            'Well prepped and executed.'
          ]
        }
      },
      {
        id: 'q2-c4',
        title: 'Best Retail Industry Insights (collateral)',
        iconName: 'Presentation',
        colorTheme: 'blue',
        segments: ['insights'],
        winner: {
          name: 'Inbal Rozencweig',
          links: [
            { label: 'View Presentation', url: 'https://docs.google.com/presentation/d/1LdCQSsO1Jp4ofOXseRjoawilM0cC3KQaj0-WBBTPBvE/edit' }
          ],
          descriptionPoints: [
            'Well structured and uses a single data source (shopper) effectively.',
            'Platform views were used while maintaining a professional look.',
            'Great executive summary and follow-up actions.',
            'Quality insights with very clear actions.',
            'Tip (Ben Smith): Make sure you have actions on every page.',
            'Tip (Ben Smith): Add quantity and price metrics (e.g., x% comes from £50).',
            'Tip (Ben Smith): Keep a clean, consistent, and polished format.',
            'Tip (Ben Smith): Add graphs/visualizations that are outside of the platform.'
          ]
        }
      },
      {
        id: 'q2-c5',
        title: 'Best SI Objection Handling',
        iconName: 'Mic',
        colorTheme: 'blue',
        segments: ['si', 'sales'],
        winner: {
          name: 'Luke Catton',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/EA9D48F346F94C94AB1A27D39071F0C3?ro_company_id=431586391' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'q2-c6',
        title: 'Best Multi-Solution Pitch',
        iconName: 'Target',
        colorTheme: 'blue',
        segments: ['demo', 'sales'],
        winner: {
          name: 'Aaron Wong',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/CE2B873828F14690A65881C1F8D2D5B7' }
          ],
          descriptionPoints: [
            'Strong impact in positioning both our Web and Shopper Intelligence solutions.',
            'The demo resonated well, sparking interest and engagement from the team.',
            'Tip (Uri): Build in a stronger narrative arc to guide the conversation and connect the dots in a storytelling flow.'
          ]
        }
      },
      {
        id: 'q2-c7',
        title: 'Best Personalization of a Team Cadence',
        iconName: 'Users',
        colorTheme: 'blue',
        segments: ['sales'],
        winner: {
          name: 'Marev Dediashvili',
          links: [
            { label: 'View File', url: 'https://drive.google.com/file/d/1xS02tpTIXbzHbpnQVGUutnwuwROZ7-g1/view' }
          ],
          descriptionPoints: [
            'Great job introducing themselves and immediately brought value to the relationship.',
            'Demonstrated strong customer understanding, highlighting a known competitive threat and backing it with data.',
            'Identified impactful focus areas that weren\'t yet on the customer\'s radar but have significant influence.'
          ]
        }
      },
      {
        id: 'q2-c8',
        title: 'Best Use of AI in Sales',
        iconName: 'Crown',
        colorTheme: 'orange',
        segments: ['ai', 'sales'],
        winner: {
          name: 'Matvey Kreyerman',
          links: [
            { label: 'View Custom GPT', url: 'https://chatgpt.com/g/g-67e24017aef4819183a09701e69ed048-qbr-strategist' },
            { label: 'Example Deck', url: 'https://docs.google.com/presentation/d/1kOB5xgrrqbLLI0g0_NOO3MmkOuj8DnqoNl1YCYvVklk/edit?slide=id.g34dbfd8955d_0_31#slide=id.g34dbfd8955d_0_31' }
          ],
          descriptionPoints: [
            'Impact on Efficiency: Significantly reduced QBR prep time while improving quality by automating research.',
            'Creativity & Initiative: Self-built and tailored GPT demonstrates strong innovation.',
            'Tangible Output: Delivered a real QBR deck that showcased high-quality, actionable insights.',
            'Scalability: The approach is easily repeatable across teams.',
            'Strategic Alignment: Fully aligned with the push toward AI-driven productivity.'
          ]
        }
      }
    ]
  },
  {
    id: 'q3-2025',
    label: 'Q3 2025',
    isActive: false,
    categories: [
      {
        id: 'q3-c1',
        title: 'Best Competitive Pitch',
        iconName: 'Mic',
        colorTheme: 'blue',
        segments: ['sales', 'demo'],
        winner: {
          name: 'Luke Catton',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/6B02B4F3BCC9455E86593D9BE9A553A9?ro_company_id=10109322' }
          ],
          descriptionPoints: [
            'Handled the question confidently and professionally, acknowledging SEMrush\'s strengths while clearly highlighting how Similarweb is different and better.',
            'Used concrete examples and spoke in the language of SEO and marketers, making the value easy to understand.'
          ]
        }
      },
      {
        id: 'q3-c2',
        title: 'Best QBR (Conversation + Presentation)',
        iconName: 'Presentation',
        colorTheme: 'blue',
        segments: ['insights', 'client-relationship'],
        winner: {
          name: 'Matvey Kreymerman',
          links: [
            { label: 'View Presentation', url: 'https://docs.google.com/presentation/d/1NKHqyxeGyL-a427ClZvnhMKRup7mbzOS5fAum9Duaaw/edit?slide=id.gca4c09b56f_0_0#slide=id.gca4c09b56f_0_0' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'q3-c3',
        title: 'Best Shopper/Cross Retail IQ Demo',
        iconName: 'BarChart',
        colorTheme: 'blue',
        segments: ['shopper', 'demo'],
        winner: {
          name: 'Esther Rogers',
          links: [
            { label: 'View Call Recording (French)', url: 'https://hello.chorus.ai/listen?guid=7943852ec2fb4453adeddc6274b732ea' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'q3-c4',
        title: 'Best Gen AI Traffic/Visibility Pitch',
        iconName: 'Zap',
        colorTheme: 'blue',
        segments: ['demo', 'ai'],
        winner: {
          name: 'Aaron Wong',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=fed6624c23fb4c1791e7f9f172249cc3' }
          ],
          descriptionPoints: [
            'An excellent demo led by Aaron with valuable contributions from Marta, resulting in a smooth and engaging presentation.',
            'Showcased how citation analysis can drive real opportunities highlighting partner brands and competitors to inspire partnership ideas and content creation strategies.'
          ]
        }
      },
      {
        id: 'q3-c5',
        title: 'Best SI Pitch (Deal over $25k)',
        iconName: 'Target',
        colorTheme: 'blue',
        segments: ['si', 'sales'],
        winner: {
          name: 'Brian Sweeter & Theodore Tomich',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/777629BB022243578BC84BE947E05DBB?ro_company_id=347922923' }
          ],
          descriptionPoints: [
            'Effectively addressed client concerns with confidence and flexibility, turning challenges into opportunities.',
            'Strategic approach and creativity led to a successful $75K upsell, showcasing strong sales acumen and teamwork.'
          ]
        },
        runnerUp: {
          name: 'Miriam Troen-Krasnow',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=b8c314005c5b401da3d8d51885e72b63&ro_company_id=38289457' }
          ],
          descriptionPoints: []
        }
      },
      {
        id: 'q3-c6',
        title: 'Best Explanation of SMWB Data',
        iconName: 'Search',
        colorTheme: 'blue',
        segments: ['insights'],
        winner: {
          name: 'Sohang Mathur',
          links: [
            { label: 'View Document', url: 'https://docs.google.com/document/d/1P2B0E0IuJ6KOfIIP5U0sCGGobT_DPIp889_Q2cflNVk/edit?tab=t.0' }
          ],
          descriptionPoints: [
            'Provides an excellent framework for transforming a ticket request and support response into a clear, client-ready message.'
          ]
        }
      },
      {
        id: 'q3-c7',
        title: 'Best Personalized Outbound Insight',
        iconName: 'Users',
        colorTheme: 'blue',
        segments: ['sales'],
        winner: {
          name: 'Eni Doka',
          links: [
            { label: 'View Document', url: 'https://docs.google.com/document/d/1W3E5mmH2wURGe98dKWPNXboYs1MJBbwYmVAg_AtWyAI/edit?tab=t.0' }
          ],
          descriptionPoints: [
            'Actively sought out relevant information tailored to the prospect and used it effectively in her outreach.',
            'Showed genuine investment in driving engagement and impact.'
          ]
        }
      },
      {
        id: 'q3-c8',
        title: 'Best AS Insights Deck',
        iconName: 'Presentation',
        colorTheme: 'blue',
        segments: ['insights'],
        winner: {
          name: 'Adam Wertheim',
          links: [
            { label: 'View Collateral', url: 'https://drive.google.com/file/d/1N3HR2InY3HUSNp5TCfD0noffpfKwr2Ff/view' }
          ],
          descriptionPoints: [
            'The data is now being leveraged by Google in discussions with Telcos, highlighting its strategic value and credibility.'
          ]
        },
        runnerUp: {
          name: 'Lindsey Anderson',
          links: [
             { label: 'View Call Recording', url: 'https://chorus.ai/meeting/C8BE726FE0054BA2929CF23396503E15?ro_company_id=369435101' },
             { label: 'View Deck', url: 'https://docs.google.com/presentation/d/1Gm2rtTDi5MU3lBZCmXHD8EgTx91FPElZl5nSVun_oqQ/edit?slide=id.g30930f88e40_1_0#slide=id.g30930f88e40_1_0' }
          ],
          descriptionPoints: []
        }
      }
    ]
  },
  {
    id: 'q4-2025',
    label: 'Q4 2025',
    isActive: true,
    categories: [
      {
        id: 'q4-c1',
        title: 'Best Profound Objection Handling',
        iconName: 'Mic',
        colorTheme: 'purple',
        segments: ['sales'],
        winner: {
          name: 'Aaron Wong',
          links: [
            { label: 'View Call Recording', url: 'https://chorus.ai/meeting/A4F6B411A1B245829FF0DC92D3F37C93?ro_company_id=64605652' }
          ],
          descriptionPoints: [
            'Did not dismiss Profound or compete on feature checklists.',
            'Calmly reframed the conversation around data truth, methodology, and business outcomes.',
            'Acknowledged objection about prompt tracking and citation coverage.',
            'Redirected to Similarweb\'s core advantage: owning first-party clickstream data.',
            'Tied AI visibility to real traffic, zero-click impact, and competitive share shifts.'
          ]
        }
      },
      {
        id: 'q4-c2',
        title: 'Best Explanation of SMWB Data by sellers/CSMs',
        iconName: 'BarChart',
        colorTheme: 'purple',
        segments: ['insights'],
        winner: {
          name: 'Marev Dediashvili',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=7c0133118e264d9c84310f64d4a9de9f' }
          ],
          descriptionPoints: [
            'Clear winner with excellent approach to data explanation.',
            'Asked questions first before explaining - consultative approach.',
            'Explained methodology simply and effectively.',
            'Engaged data ambassador demonstrating commitment to the program.',
            'Excellent proof of what a serious data ambassador program yields.'
          ]
        }
      },
      {
        id: 'q4-c3',
        title: 'Best App Intelligence Demo',
        iconName: 'Presentation',
        colorTheme: 'purple',
        segments: ['demo'],
        winner: {
          name: 'Esther Rogers',
          links: [
            { label: 'View Demo Recording', url: 'https://drive.google.com/file/d/1x-oC1O-xYysAjhGz_rT3-QksDop22B9w/view?usp=sharing' }
          ],
          descriptionPoints: [
            'Exceptional storytelling and value-selling approach.',
            'Positioned App Intel holistically with Web Intel at the very beginning.',
            'Hooked audience from the start with strong narrative.',
            'Objection handling on data methodology was handled expertly.',
            'Positioned roadmap features effectively.',
            'Presented latest platform innovations and AI capabilities.',
            'Connected usage/stickiness to reviews seamlessly.',
            'Tied usage/sentiment insights to SDK implementations.'
          ]
        }
      },
      {
        id: 'q4-c4',
        title: 'Best Shopper/Cross Retail IQ Upsell',
        iconName: 'Target',
        colorTheme: 'purple',
        segments: ['shopper', 'demo'],
        winner: {
          name: 'Esther Rogers & Oren',
          links: [
            { label: 'View Call Recording', url: 'https://hello.chorus.ai/listen?guid=3d6a443ac0f84b138c90ca3173724e48' }
          ],
          descriptionPoints: [
            'Excellent teamwork between Oren and Esther.',
            'Both came across as knowledgeable and action-oriented.',
            'Clear responsibilities: Oren guided call and commercial questions, Esther executed deep analysis.',
            'Outstanding shopper demo with real insights personalized to customer.',
            'All insights connected back to real actions customer could take.',
            'Esther adapted messaging and insights in-flight based on customer feedback.',
            'Oren handled price and packaging challenges skillfully.',
            'Successfully guided customer toward annual/2-year contracts despite push for 1-month test.'
          ]
        }
      },
      {
        id: 'q4-c5',
        title: 'Best Positioning of our Gen AI Suite',
        iconName: 'Zap',
        colorTheme: 'purple',
        segments: ['demo', 'ai'],
        winner: {
          name: 'Shiran Maimon',
          links: [],
          descriptionPoints: []
        }
      },
      {
        id: 'q4-c6',
        title: 'Best use of AI Insights to Pitch Similarweb',
        iconName: 'Search',
        colorTheme: 'purple',
        segments: ['ai', 'sales'],
        winner: {
          name: 'Marev Dediashvili',
          links: [
            { label: 'View Document', url: 'https://docs.google.com/document/d/1_8uNzw9uBEoJl7DLHf3FmMsLHi2m_EBdn3bB4mSgKrY/edit?usp=sharing&urp=gmail_link' }
          ],
          descriptionPoints: [
            'Very detailed and comprehensive approach.',
            'Included a lot of great insights.',
            'Leveraged AI to create compelling pitch materials.'
          ]
        }
      },
      {
        id: 'q4-c7',
        title: 'Best Example of Getting a Prospect/Customer to Quantify their Pain',
        iconName: 'Target',
        colorTheme: 'purple',
        segments: ['sales', 'client-relationship'],
      },
      {
        id: 'q4-c8',
        title: 'Best Successful Integration (process/template)',
        iconName: 'Zap',
        colorTheme: 'purple',
        segments: ['demo'],
        winner: {
          name: 'Delaney Macdonald',
          links: [
            { label: 'View Integration Template', url: 'https://docs.google.com/spreadsheets/d/1KxBI-wABxsDZSkDLHbOOnRaPMyOKQQQySvAIuU1m2_M/edit?usp=sharing' }
          ],
          descriptionPoints: [
            'Saw a problem and took initiative to fix it.',
            'Used our connector to build a custom view exactly matching customer needs.',
            'Created a simple Google Sheet solution with major impact.',
            'Customer now uses it regularly in their workflow.',
            'Demonstrated how to create lasting value through thoughtful problem-solving.'
          ]
        }
      },
      {
        id: 'q4-c9',
        title: 'Best Multi-thread Outreach where you Leveraged other Interactions',
        iconName: 'Users',
        colorTheme: 'purple',
        segments: ['sales'],
        winner: {
          name: 'Eni Doka',
          links: [
            { label: 'View Account Record', url: 'https://similarweb.lightning.force.com/lightning/r/Account/001QB00000ctSZ1YAM/view' }
          ],
          descriptionPoints: [
            'Excellent multi-threading best practice.',
            'Referenced past relationships to create familiarity and credibility.',
            'Leveraged prior work with Alison\'s former group within Amazon.',
            'Strong example of multi-thread best practices in action.',
            'Should be highlighted as a best practice for the broader team.'
          ]
        }
      },
      {
        id: 'q4-c10',
        title: 'Open Category',
        iconName: 'Trophy',
        colorTheme: 'purple',
        segments: ['demo', 'client-relationship', 'insights', 'sales', 'ai', 'si', 'shopper'],
        winner: {
          name: 'Priyesh Patel',
          links: [
            { label: 'View Presentation', url: 'https://docs.google.com/presentation/d/16NC8y3Uy2eBKLq5pc_856rBKXWBAC2oU94h6VKKeitA/edit?usp=sharing' },
            { label: 'View Chorus Call', url: 'https://chorus.ai/meeting/A373AF9D54BF490B8ACA0B6ECA92C49D?start=3310&ro_company_id=11375450' }
          ],
          descriptionPoints: [
            'Strong brand health methodology explanation.',
            'Clearly articulated how to build brand health scores and recommendations.',
            'Excellent flow from methodology to customer-specific brand health comparison.',
            'Positioned peer comparison to validate customer performance and inspire improvement.',
            'Clear omni-channel strategy recommendations throughout.',
            'Highly actionable example for GTM organization selling CPG brands.',
            'Strong visualization and multiple Similarweb datasets utilized.',
            'Effectively showcased new AI brand visibility features.'
          ]
        },
        runnerUp: {
          name: 'Jack Sherman & Thomas Verberder',
          links: [
            { label: 'Jack Sherman Presentation', url: 'https://docs.google.com/presentation/d/1taP1Ze7f18BVWsHkju_5ueL5QtdrvoxKyzbpirsw-ZY/edit?usp=sharing' },
            { label: 'Thomas Verberder Presentation', url: 'https://drive.google.com/file/d/1WoIr-yPSCptO2KQV5N3ZVOEIbd9Xru9X/view?usp=drive_link' }
          ],
          descriptionPoints: []
        }
      }
    ]
  }
];

export const SEGMENT_LABELS = {
  'demo': 'Demo',
  'client-relationship': 'Client Relationship',
  'insights': 'Insights',
  'sales': 'Sales',
  'ai': 'AI',
  'si': 'SI',
  'shopper': 'Shopper'
} as const;
