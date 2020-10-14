export const categories = [
    {
        name: 'Control',
        thumbPath: require("../assets/images/products/control/control-thumb.png")
    },
    {
        name: 'Isolation',
        thumbPath: require("../assets/images/products/isolation/isolation-thumb.png")
    },
    {
        name: 'Automation',
        thumbPath: require("../assets/images/products/automation/automation-thumb.png")
    },
    {
        name: 'Piping Systems',
        thumbPath: require("../assets/images/products/piping-systems/piping-systems-thumb.png")
    },
    {
        name: 'Flow',
        thumbPath: require("../assets/images/products/flow/vortex-flow-meter-thumb.png")
    },
    {
        name: 'Level',
        thumbPath: require("../assets/images/products/level/Large-Chamber-Gauge-thumb.png")
    },
    {
        name: 'Instrumentation',
        thumbPath: require("../assets/images/products/instrumentation/Differential-Pressure-Transmitter-thumb.png")
    },
    // {
    //     name: 'Tanks & Pumps',
    //     thumbPath: require("../assets/images/products/tanks-pumps/tanks-pumps-thumb.png")
    // },
    {
        name: 'Filtration',
        thumbPath: require("../assets/images/products/filtration/oil-and-gas-spifil-thumb.png")
    },
    // {
    //     name: 'System Accessories',
    //     thumbPath: require("../assets/images/products/system-accessories/system-accessories-thumb.png")
    // },
]

export const controlProductLines = [
    {
        name: 'IMI-CCI Portfolio',
        thumbPath: require("../assets/images/products/control/imi-cci/rotary-drag/rotary-drag-1.png"),
        description: `Our portfolio of control valves fall into three broad classes based on the severity of the application they serve: general service; semi-severe and severe service. Our portfolio includes several proven technology platforms, including BTG, ABJ®, DRAG®, Zikesch, IMI Bopp & Reuther and the valve technology acquired from Sulzer® Ltd. These technologies allow customers to balance the ease of installation against noise abatement, reliability and control. Our portfolio of pneumatic, hydraulic and electric actuators, also enhances control functions.​`,
        category: 'Control',
        productSets: [
            {
                subheader: "Rotary DRAG with C-Rex",
                description: `Our Ball Valves are designed as a solution for critical service applications, combining the advantages of main critical service valve designs while eliminating their weakness or design limitations. This makes them ideal to meet the most stringent requirements in critical applications such as oil and gas, chemical, petrochemical, mining, liquified natural gas (LNG)`,
                link: `http://www.imi-critical.com/products/Pages/Product-C-Rex-Valve.aspx`,
                picPaths: [
                    require("../assets/images/products/control/imi-cci/rotary-drag/rotary-drag-1.png"),
                    require("../assets/images/products/control/imi-cci/rotary-drag/rotary-drag-2.png"),
                    require("../assets/images/products/control/imi-cci/rotary-drag/rotary-drag-3.png"),
                    require("../assets/images/products/control/imi-cci/rotary-drag/rotary-drag-4.png"),
                ],
            },
            {
                subheader: "Steam Attemperator",
                description: `“​​​​​​​​​​​​Ensuring power plants operate economically with daily cycling or reduced loads requires reliable superheat and reheat stages to optimise the heat recovery steam generators – and ensure the steam is near saturation. Too hot may damage equipment and too cold will result in excess water leading to loss of control and piping damage downstream. IMI Critical products reduce such failures and outages.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/imi-cci/steam-attemp/steam-attemp-1.png"),
                    require("../assets/images/products/control/imi-cci/steam-attemp/steam-attemp-2.png"),
                ],
            },
            {
                subheader: "General Service",
                description: `The 840 series cage-guided valve is specially designed using recent advances in control valve technology. It is used to control a wide variety of relatively clean liquids and gases at high pressure differentials.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/imi-cci/general-service/general-service-1.png"),
                ],
            },
            {
                subheader: "Fluid Kinetics Silencers",
                description: `In a safety relief system, the primary release of noise energy occurs at the open stack exit.  Our silencers use dissipative and reactive noise-reducing technology.  They can be installed either within the stack or at the stack outlet to intercept this noise before it escapes into the environment; providing the required attenuation for predominant, very high frequency noise.​`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/imi-cci/silencer/silencer-1.png"),
                    require("../assets/images/products/control/imi-cci/silencer/silencer-2.png"),
                ],
            }
        ]
    },
    {
        name: 'DFT Control Valves',
        thumbPath: require("../assets/images/products/control/dft/hi-100.png"),
        description: `DFT®’s top-of-the-line control valves feature a straight-thru design, allowing for an unobstructed flow with no abrupt changes in the flow path.`,
        category: 'Control',
        productSets: [
            {
                subheader: "HI-100",
                description: `The HI-100® features an in-line Straight-thru, venturi flow design. The seating element, a spherical ball, is contained by a cage that positions it relative to the downstream seat by means of linear stem travel. There are no close clearances between the moving parts (i.e. cage, ball and seat). These features enable the valve to operate smoothly and efficiently at high or low temperatures, and/or in fluids carrying suspended particles such as slurries.`,
                link: `https://catalog.dft-valves.com/item/control-and-block-valves/dft-hi-100-severe-service-control-valve/dft-sup-sup-hi-100-control-valve`,
                picPaths: [
                    require("../assets/images/products/control/dft/hi-100.png"),
                ],
            },
            {
                subheader: "Ultra-Trol",
                description: `The ULTRA-TROL® is designed for lined pipe applications requiring flanged end connections. The internal design features are similar to the HI-100™. They include the in-line through ported venturi flow shape and the contained spherical ball.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/dft/ultratrol.png"),
                ],
            },
            {
                subheader: "LSV-100",
                description: `The LSV-100® Control Valve is an economical control valve designed for flanged applications. Trim is replaceable in the field through the bonnet. Construction is Carbon or Stainless Steel with stainless steel internals.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/dft/LSV-100-1.png"),
                    require("../assets/images/products/control/dft/LSV-100-2.png"),
                ],
            },
            {
                subheader: "MSV-100",
                description: `The MSV-100® Control Valve is designed for flanged applications where repairs are commonly made on the bench. The seat and internal design are based upon our Severe Service valves, providing the same rugged reliability for medium service applications. The MSV-100® can be used for on/off service or modulating control in gas, liquid and steam applications.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/control/dft/MSV-100.png"),
                ],
            }
        ]
    },
    {
        name: 'Research Control Valves',
        thumbPath: require("../assets/images/products/control/Research-Control-Valves-thumb.png"),
        description: `Processing plants, research facilities and government agencies worldwide rely on Research Control® Valves from Badger Meter for repeatable performance and durability. Built for applications two inches or smaller, our globe, angle and sanitary valves are integral components in systems ranging from petrochemical processing to pharmaceutical manufacturing.`,
        category: 'Control',
        productSets: [
            {
                subheader: "Type 807 Low Control Valve",
                description: `Our Model 807 control valve is a market leader because of its reliability, flexibility and durability. If your application requires critical control of liquid or gas flow, the RCV 807/752 is a trusted, high performance solution. This model is available in ¼” thru 1” line sizes and a wide range of Cv’s and flow characteristics.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/research-control-valve/?page=2&amp;brands=research-control-valve&amp;sizeuniturlpart=millimeter&amp;temperatureuniturlpart=celsius&amp;pressureuniturlpart=bar`,
                picPaths: [
                    require("../assets/images/products/control/badger/Type-807.png")
                ],
            },
            {
                subheader: "Type 808 Bellows Seal",
                description: `Bellows sealed globe control valve is especially suited to applications where the possibility of packing leakage cannot be tolerated. The bellows forms a flexible static seal that is virtually leak-free as long as the integrity of the bellows remains intact.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/research-control-valve/?page=2&amp;brands=research-control-valve&amp;sizeuniturlpart=millimeter&amp;temperatureuniturlpart=celsius&amp;pressureuniturlpart=bar`,
                picPaths: [
                    require("../assets/images/products/control/badger/Type-808.png")
                ],
            },
            {
                subheader: "PVDF Plastic Valve for Corrosive Service",
                description: `The PVDF Plastic Control Valve for Corrosive Service is available in 1/4 in., 1/2 in., 3/4 in. and 1 in. sizes. Its compact design and light weight make it especially suited for modulating control of low to medium flow rates.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/research-control-valve/?page=2&amp;brands=research-control-valve&amp;sizeuniturlpart=millimeter&amp;temperatureuniturlpart=celsius&amp;pressureuniturlpart=bar`,
                picPaths: [
                    require("../assets/images/products/control/badger/PVDF-Valve.png")
                ],
            },
            {
                subheader: "SCV-85 Sanitary",
                description: `SCV-85 Research Control Valves are compact control valves designed to meet the manufacturing standards established by the 3A Symbol Council. Valves of the SCV-85 type are well suited to automated control systems found in biotechnology, pharmaceutical and food processes.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/research-control-valve/?page=2&amp;brands=research-control-valve&amp;sizeuniturlpart=millimeter&amp;temperatureuniturlpart=celsius&amp;pressureuniturlpart=bar`,
                picPaths: [
                    require("../assets/images/products/control/badger/SCV-85.png")
                ],
            },
        ]
    },
    {
        name: 'Warren Control Valves',
        thumbPath: require("../assets/images/products/control/warren/1800.png"),
        description: `Linear and rotary 2 way and 3 way globe control valves up to 12” for the commercial and industrial markets. Electric and pneumatic actuators allow us to serve our customer needs.`,
        category: 'Control',
        productSets: [
            {
                subheader: "1800 Series Industrial Globe",
                description: `Series 1800 commonly used for high pressure differentials, corrosive materials, liquids, gases, and steam. They are for modulating or on/off control in 2-way or 3-way mixing or diverting designs, available in steel & iron with a wide selection of trims, actuators, and accessory instrumentation.`,
                link: `http://www.warrencontrols.com/products/type/2/industrial_control_valve`,
                picPaths: [
                    require("../assets/images/products/control/warren/1800.png"),
                ],
            },
            {
                subheader: "3800 Series Rotary E-ball",
                description: `Series 3800 incorporates the time-tested and proven Eccentric-Segmented Ball design (E-Ball), combining exceptionally tight control and range-ability (100:1), with superior trim wear characteristics inherent with the eccentric design. Available as completely automated valve assemblies with the highest quality actuators and accessories available or as bare stem product ready for your automation needs, the 3800 Series comes in a wide variety of standard options for body/trim materials and construction builds, from Class IV to Class VI shut off. The ever-popular TTZ Ceramic Trim is an off-the-shelf choice for erosive or corrosive fluids and a vast array of custom alloys can be selected for custom construction, engineered to your specific application needs.`,
                link: `http://www.warrencontrols.com/products/type/2/industrial_control_valve`,
                picPaths: [
                    require("../assets/images/products/control/warren/3800.png"),
                ],
            },
            {
                subheader: "ARIA Electric linear control",
                description: `The ARIA Series actuators are designed as either Spring-Fail-Safe upon Loss of- Power, or as Fail-In-Place on Loss-of-Power, (model dependent.)`,
                link: `http://www.warrencontrols.com/products/type/2/industrial_control_valve`,
                picPaths: [
                    require("../assets/images/products/control/warren/aria.png"),
                ],
            },
        ]
    },
    // {
    //     name: 'Azbil Control Valves',
    //     thumbPath: require("../assets/images/products/control/azbil-control-valves.png"),
    //     description: `ACTIVAL, high performance control valve, realizes maximum energy efficiency, cost savings, and resource savings in HVAC facilities. Azbil, serves Building Automation for more than 110 years. ACTIVAL represents our rich experiences in this field as a control valve. Wide variety of lineup best matched for your needs.`,
    //     category: 'Control',
    //     productSets: [
    //         {
    //             description: `ACTIVAL, high performance control valve, realizes maximum energy efficiency, cost savings, and resource savings in HVAC facilities. Azbil, serves Building Automation for more than 110 years. ACTIVAL represents our rich experiences in this field as a control valve. Wide variety of lineup best matched for your needs.`,
    //             link: `https://us.azbil.com/actival/`,
    //             picPaths: [
    //                 require("../assets/images/products/isolation/GeneralTwinSeal.png"),
    //                 require("../assets/images/products/isolation/WKM-Pow-R-Seal.png")
    //             ],
    //         }
    //     ]
    // }
]

export const isolationProductLines = [
    {
        name: 'IMI Isolation Valves',
        thumbPath: require("../assets/images/products/isolation/imi/IMI-Isolation-Valve-thumb.png"),
        description: `We offer a full range of rotary (ball and butterfly), slide and gate valve solutions ranging from ½ inch to ​​160 inch (12mm to 4000mm) engineered and manufactured for your critical application. Our portfolio includes top and side entry and segment ball valves from IMI Truflo Rona, double and triple eccentric butterfly valves for all on-off and flow control applications from IMI Orton. We are industry leading in cryogenic (LNG) and petrochemical applications.`,
        category: 'Isolation',
        productSets: [
            {
                subheader: "IMI-Orton Butterfly",
                description: `​​​​​​​​A full range of designs with double and triple eccentric butterfly valves in non-return, on-off and modulating control service.  They come with lined or specialist materials to meet service requirements and seating/seal technologies to cover all customer requirements including cryogenic service.`,
                link: `http://www.imi-critical.com/products/Pages/Isolation.aspx`,
                picPaths: [
                    require("../assets/images/products/isolation/imi/orton/orton-1.png"),
                    require("../assets/images/products/isolation/imi/orton/orton-2.png"),
                    require("../assets/images/products/isolation/imi/orton/orton-3.png"),
                ],
            },
            {
                subheader: "IMI-Truflo Ball Valves",
                description: `An international leader in the design and manufacturing of high integrity ball valves focused on the needs of oil & gas, LNG, petrochemical and shipbuilding sectors. Our range includes trunnion mounted, with wedge or floating seats; double eccentric designs; and top and side entry configurations.​`,
                link: `http://www.imi-critical.com/products/Pages/Isolation.aspx`,
                picPaths: [
                    require("../assets/images/products/isolation/imi/truflo/truflo-1.png"),
                    require("../assets/images/products/isolation/imi/truflo/truflo-2.png"),
                    require("../assets/images/products/isolation/imi/truflo/truflo-3.png"),
                ],
            },
            {
                subheader: "IMI Z&J Gate Valves",
                description: `IMI Z&J have been a manufacturer of large diameter valves for more than 135 years, with thousands of double disc installations worldwide in severe refining and petrochemical applications such as Fluidised Catalytic Cracking, Ethylene and since 2004 Delayed Coking.`,
                link: `http://www.imi-critical.com/products/Pages/Isolation.aspx`,
                picPaths: [
                    require("../assets/images/products/isolation/imi/zj/zj-1.png"),
                    require("../assets/images/products/isolation/imi/zj/zj-2.png"),
                    require("../assets/images/products/isolation/imi/zj/zj-3.png"),
                ],
            },
        ]
    },
    {
        name: 'Andronaco Composite and Lined Valves',
        thumbPath: require("../assets/images/products/isolation/andronaco-composite-lined/Andronaco-composite-Lined-valve-thumb.png"),
        description: `Andronaco has a full offering of ball, plug, and butterfly valves for corrosive service. Our expertise in fluoropolymers and chemicals will ensure optimum material compatibility.`,
        category: 'Isolation',
        productSets: [
            {
                subheader: "Ball Valves",
                description: `Pureflex lined composite ball valves and Hills Mccanna Chemtite PFA lined DI valves can be provided as manual or fully automated assemblies to suit all of your chemical isolation needs.`,
                link: `https://www.andronaco.com/products/valves/ball_valves`,
                picPaths: [
                    require("../assets/images/products/isolation/andronaco-composite-lined/ball/ball-valve-1.png"),
                    require("../assets/images/products/isolation/andronaco-composite-lined/ball/ball-valve-2.png"),
                    require("../assets/images/products/isolation/andronaco-composite-lined/ball/ball-valve-3.png"),
                ]
            },
            {
                subheader: "Plug Valves",
                description: `Hills Mccanna Chemtite TFM PTFE/PFA lined DI plug valves can be provided as manual or fully automated assemblies to suit all of your chemical isolation needs.`,
                link: `https://www.andronaco.com/products/valves/plug_valves`,
                picPaths: [
                    require("../assets/images/products/isolation/andronaco-composite-lined/plug/nilcorballvalve.png")
                ]
            },
            {
                subheader: "Butterfly Valves",
                description: `Pureflex 800 series and 890 series composite valves are the strongest, lightest, and most chemically resistant valves in the world.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/isolation/andronaco-composite-lined/butterfly/butterfly-1.png"),
                    require("../assets/images/products/isolation/andronaco-composite-lined/butterfly/butterfly-2.png"),
                    require("../assets/images/products/isolation/andronaco-composite-lined/butterfly/butterfly-3.png"),
                ]
            },
        ]
    },
    {
        name: 'Check Valves',
        thumbPath: require("../assets/images/products/isolation/check-valves/dft/ALC_DFT_check_valve.png"),
        description: `Vector Process has check valves for all of your severe service and corrosive environment needs`,
        category: 'Isolation',
        productSets: [
            {
                subheader: "IMI Remosa Check valves",
                description: `IMI Remosa’s double clapet isolation valve is a new patented design (US6886594​) to​ guarantee a tight shut-off under the most extreme operating conditions, including temperature and pressure. Installed in the Fluidised Catalytic Cracker (FCC) power recovery unit, it allows the maintenance of the Expander while avoiding the shut-down of the FCC.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/isolation/check-valves/imi/imi-remosa-1.png"),
                    require("../assets/images/products/isolation/check-valves/imi/imi-remosa-2.png"),
                ]
            },
            {
                subheader: "DFT Check Valves",
                description: `DFT®'s silent check valves are known around the world as the valve to use for preventing or eliminating Water Hammer problems.`,
                link: `https://www.dft-valves.com/check-valves/`,
                picPaths: [
                    require("../assets/images/products/isolation/check-valves/dft/ALC_DFT_check_valve.png"),
                    require("../assets/images/products/isolation/check-valves/dft/BSSV_DFT_Vacuum_Breaker.png"),
                    require("../assets/images/products/isolation/check-valves/dft/Restrictor_DFT_check_valve.png"),
                    require("../assets/images/products/isolation/check-valves/dft/SCV_DFT_check_valve.png"),
                ]
            },
            {
                subheader: "Andronaco Composite and Lined Check Valves",
                description: `Swing and ball check valves built to handle all corrosive environments.`,
                link: `https://www.andronaco.com/products/valves/check_valves`,
                picPaths: [
                    require("../assets/images/products/isolation/check-valves/andronaco/andronaco-check-1.png"),
                    require("../assets/images/products/isolation/check-valves/andronaco/andronaco-check-2.png"),
                    require("../assets/images/products/isolation/check-valves/andronaco/andronaco-check-3.png"),
                ]
            },
        ]
    },
    {
        name: 'Delval Flow Controls',
        thumbPath: require("../assets/images/products/isolation/delval/Delval-Flow-Controls-thumb.png"),
        description: `DelVal Flow Controls provides a wide range of superior quality ball valves, butterfly valves, actuators and control accessories by implementing a robust quality management system compliant to ISO 9001-2015 and cultivating a knowledgeable staff.  Our products are fully integrated and cater to a wide spectrum of applications including Oil & Gas, Power Generation, Mining, Chemical Process, Marine, Pharmaceutical, Food & Beverage, Water and other industrial markets. Our global network of offices, distributors, channel partners and highly experienced sales and service staff are always ready to meet our customers’ most stringent requirements.`,
        category: 'Isolation',
        productSets: [
            {
                subheader: "Ball Valves",
                description: `Three piece, trunnion mounted, floating ball, and flanged ball valves, manual or fully automated to meet your specifications.`,
                link: `https://www.delvalflow.com/product`,
                picPaths: [
                    require("../assets/images/products/isolation/delval/ball/ball-1.png"),
                    require("../assets/images/products/isolation/delval/ball/ball-2.png"),
                    require("../assets/images/products/isolation/delval/ball/ball-3.png"),
                    require("../assets/images/products/isolation/delval/ball/ball-4.png"),
                ]
            },
            {
                subheader: "Butterfly Valves",
                description: `Resilient seated, high performance, and triple offset butterfly valves.`,
                link: `https://www.delvalflow.com/product`,
                picPaths: [
                    require("../assets/images/products/isolation/delval/butterfly/butterfly-1.png"),
                    require("../assets/images/products/isolation/delval/butterfly/butterfly-2.png"),
                    require("../assets/images/products/isolation/delval/butterfly/butterfly-3.png"),
                    require("../assets/images/products/isolation/delval/butterfly/butterfly-4.png"),
                ]
            },
        ]
    },
    {
        name: 'Cameron Pipeline Valves',
        thumbPath: require("../assets/images/products/isolation/GeneralTwinSeal.png"),
        description: `Double Block & Bleed and Expanding Gate valves, in stock and ready to ship for all of your pipeline and terminal needs.`,
        category: 'Isolation',
        productSets: [
            {
                subheader: "Twin Seal",
                description: `Rapid seal abrasion is inherent in the designs of most ball and gate valves. The double block-and-bleed (DBB) Cameron GENERAL VALVE Twin Seal plug valve reduces this constant wear by using two seating slips mounted independently on a tapered plug by dovetails, which mechanically retract from the seating surface prior to rotating. This provides a bubble-tight verifiable dual seal without seal abrasion.`,
                link: `https://www.energyproducts.us/`,
                picPaths: [
                    require("../assets/images/products/isolation/GeneralTwinSeal.png")
                ]
            },
            {
                subheader: "Pow-R-Seal",
                description: `60 years of worldwide service in oil, gas, chemicals, water, slurry, and multiproduct applications has established the Pow-R-Seal double expanding gate valve as one of the most trusted gate valves, especially where safety and seal reliability are critical. The positive, mechanical seating force of the lock-in-place seals holds with zero leakage through conditions of vibration, pressure change, and temperature excursion. The rigid, cast steel body resists pipeline bending moments. TFE seals on both faces of the valve provide drop-tight sealing even at low differential pressure, while metal-to-metal contact between the seals and gate mechanism provides fire-safe shutoff.`,
                link: `https://www.energyproducts.us/`,
                picPaths: [
                    require("../assets/images/products/isolation/WKM-Pow-R-Seal.png")
                ]
            },
        ]
    },
]

export const flowProductLines = [
    {
        name: 'Azbil Flow Meters',
        thumbPath: require("../assets/images/products/flow/azbil/azbil-mag-meter.png"),
        description: ` `,
        category: 'Flow',
        productSets: [
            {
                subheader: "Azbil Flow Meters",
                description: `Azbil’s high-efficiency electromagnetic flowmeters can be applied to a wide-range of applications. Based on technologies that were fostered by our long-time amassed experience and performance records, these industry proven come in a large array of sizes and liners.`,
                link: `https://us.azbil.com/category/industrial-automation/electromagnetic-flowmeters/`,
                picPaths: [
                    require("../assets/images/products/flow/azbil/azbil-mag-meter.png"),
                    require("../assets/images/products/flow/azbil/IJABMGG17D.png"),
                    require("../assets/images/products/flow/azbil/Integral-Wafer-2.png"),
                    require("../assets/images/products/flow/azbil/MGG14C.png"),
                ]
            },
            {
                subheader: "Vortek Flow Meters",
                description: ``,
                link: ``,
                picPaths: [

                ]
            },
        ]
    },
    {
        name: 'Badger Meter Flow',
        thumbPath: require("../assets/images/products/flow/badger/badger-meter-mag-meter.png"),
        description: ` `,
        category: 'Flow',
        productSets: [
            {
                subheader: "Badger",
                description: ` `,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/modmag-m-series/`,
                picPaths: [
                    require("../assets/images/products/flow/badger/badger-meter-mag-meter.png"),
                    require("../assets/images/products/flow/badger/M3000.png"),
                    require("../assets/images/products/flow/badger/M4000.png"),
                    require("../assets/images/products/flow/badger/7600Series.png"),
                ]
            },
            {
                subheader: "Ultrasonic",
                description: `Dynasonics ultrasonic meters measure flow rate by propagating ultrasound waves into liquid-filled pipes and measuring the reflections. There are two technologies to choose from based on the fluid properties—transit time and Doppler. With clamp-on technology, these ultrasonic meters reside outside the pipe and bring you flow measurement with many benefits including reduced installation costs, uninterrupted production, installation flexibility across a wide range of pipe sizes, no pressure head loss, no contact with internal liquid and no moving parts to maintain.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/dynasonics/`,
                picPaths: [
                    require("../assets/images/products/flow/ultrasonic/ultrasonic-meter.png"),
                    require("../assets/images/products/flow/ultrasonic/5000_easyrail.png"),
                    require("../assets/images/products/flow/ultrasonic/U500w-family.png"),
                    require("../assets/images/products/flow/ultrasonic/Doppler.png"),
                ]
            },
            {
                subheader: "Blancett",
                description: ` `,
                link: ``,
                picPaths: [

                ]
            },
            {
                subheader: "Preso",
                description: `Preso® differential pressure technology is one of the most proven measuring technologies and Badger Meter has offered these primary flow elements for more than 50 years. Preso meters offer a custom engineered solution specifically manufactured to fit within your system, providing a reliable long-term solution for fluid, steam or gas applications.`,
                link: `https://www.badgermeter.com/flow-instrumentation/brands/preso/`,
                picPaths: [
                    require("../assets/images/products/flow/preso/preso-venturi.png"),
                    require("../assets/images/products/flow/preso/AHL_Gray.png"),
                    require("../assets/images/products/flow/preso/AHR-Gray.png"),
                    require("../assets/images/products/flow/preso/preso-venturi-2.png"),
                ]
            },
        ]
    },
    {
        name: 'Site Flow Indicators',
        thumbPath: require("../assets/images/products/flow/site-flow/bullseye/bullseye.png"),
        description: ` `,
        category: 'Flow',
        productSets: [
            {
                subheader: "Bullseye",
                description: ` `,
                link: `https://www.andronaco.com/products/sight_indicators/bullseye`,
                picPaths: [
                    require("../assets/images/products/flow/site-flow/bullseye/bullseye.png"),
                ]
            },
            {
                subheader: "360 View",
                description: ` `,
                link: `https://www.andronaco.com/products/sight_indicators/360`,
                picPaths: [
                    require("../assets/images/products/flow/site-flow/360view/chemtitesitevue.png"),
                    require("../assets/images/products/flow/site-flow/360view/doublesure.png"),
                    require("../assets/images/products/flow/site-flow/360view/pure-vu.png"),
                    require("../assets/images/products/flow/site-flow/360view/puresite.png"),
                ]
            },
            {
                subheader: "FEP Unbreakable",
                description: ` `,
                link: `https://www.andronaco.com/products/sight_indicators/puresite`,
                picPaths: [
                    require("../assets/images/products/flow/site-flow/fep/puresite.png"),
                ]
            },
        ]
    },
    // {
    //     name: 'Vortex Flow Meter',
    //     thumbPath: require("../assets/images/products/flow/vortex-flow-meter-thumb.png"),
    //     description: ``,
    //     link: `https://us.azbil.com/category/industrial-automation/vortex-flow-meters/`,
    //     category: 'Flow'
    // },
    // {
    //     name: 'Vorcone meter',
    //     thumbPath: require("../assets/images/products/flow/vorcone-meter.png"),
    //     description: `Azbil VorTek VorCone™ flow meters utilize two different flow meter technologies in combination; vortex and differential pressure. The design has blended the two separate flow metering principles into one hybrid system where the two meters complement each other’s performance. This combination allows for the prediction of the fluid density, volumetric flow rate and mass flow rate without any fluid density information being required from an external source.`,
    //     link: `https://us.azbil.com/product-series/azbil-vortek-vorcone-flow-meters/`,
    //     category: 'Flow'
    // },
    // {
    //     name: 'Turbine Meter',
    //     thumbPath: require("../assets/images/products/flow/turbine-meter.png"),
    //     description: `Badger Meter offers the Blancett® family of turbine flow meters to measure everything from water in hydraulic fracturing and mining operations to gases and liquids from wellheads, plus various fluids in sanitary environments. Our turbine meters deliver accurate, consistent, reliable and informative flow measurements for liquid and gas applications.`,
    //     link: `https://www.badgermeter.com/flow-instrumentation/brands/blancett/`,
    //     category: 'Flow'
    // },
]

export const levelProductLines = [
    {
        name: 'Reflex and Transparent Glass Gauges',
        thumbPath: require("../assets/images/products/level/Large-Chamber-Gauge.png"),
        description: `Glass-Trac Gauges, formally Daniel Level Gauge & Valve, are available in three main types: Reflex, Transparent, & Tubular. These direct reading instruments are available in many different materials to meet your specific process conditions.`,
        category: 'Level',
        productSets: [
            {
                description: `Glass-Trac Gauges, formally Daniel Level Gauge & Valve, are available in three main types: Reflex, Transparent, & Tubular. These direct reading instruments are available in many different materials to meet your specific process conditions.`,
                link: `https://www.questtecsolutions.com/product-line/glass-trac/`,
                picPaths: [
                    require("../assets/images/products/level/Large-Chamber-Gauge.png"),
                ]
            },
        ]
    },
    {
        name: 'Magnetic Level Gauge',
        thumbPath: require("../assets/images/products/level/magne-trac-plus.png"),
        description: `Magne-Trac products are among the safest and most economical ways to measure liquid levels, excelling in applications of extreme pressure, temperature, vibration, and corrosive or hazardous materials.`,
        category: 'Level',
        productSets: [
            {
                description: `Magne-Trac products are among the safest and most economical ways to measure liquid levels, excelling in applications of extreme pressure, temperature, vibration, and corrosive or hazardous materials.`,
                link: `https://www.questtecsolutions.com/product-line/magne-trac/`,
                picPaths: [
                    require("../assets/images/products/level/magne-trac-plus.png"),
                ]
            },
        ]
    },
    {
        name: 'Flange mount DP level',
        thumbPath: require("../assets/images/products/level/Flange-mount.png"),
        description: `The AT9000 Flange Mount Level Transmitters provide a cost effective method of level measurement applications such as storage tanks, reactor vessels and distillation columns.`,
        category: 'Level',
        productSets: [
            {
                description: `The AT9000 Flange Mount Level Transmitters provide a cost effective method of level measurement applications such as storage tanks, reactor vessels and distillation columns.`,
                link: `https://us.azbil.com/product-series/at9000-flange-mount-transmitter-for-liquid-level-measurement/`,
                picPaths: [
                    require("../assets/images/products/level/Flange-mount.png"),
                ]
            },
        ]
    },
    {
        name: 'Guided Wave Radar',
        thumbPath: require("../assets/images/products/level/Guided-Wave-Radar.png"),
        description: `The QTS Guided Wave Radar delivers an independent reading of liquid and solid levels. These top mount, direct insertion radars measure interface and direct level of liquids and solids, both of high and low pressures and temperatures.`,
        category: 'Level',
        productSets: [
            {
                description: `The QTS Guided Wave Radar delivers an independent reading of liquid and solid levels. These top mount, direct insertion radars measure interface and direct level of liquids and solids, both of high and low pressures and temperatures.`,
                link: `https://www.questtecsolutions.com/product-line/guided-wave-radar/`,
                picPaths: [
                    require("../assets/images/products/level/Guided-Wave-Radar.png"),
                ]
            },
        ]
    },
    {
        name: 'Non Contact Microwave for liquids and solids',
        thumbPath: require("../assets/images/products/level/microwave.png"),
        description: `Azbil compact level transmitters feature higher performance for all kinds of fine powder, and bulk solids as well as liquid applications. They can be specified for optimal performance in high temperature, high pressure, corrosive, steam, airborne dust, and turbulence conditions.`,
        category: 'Level',
        productSets: [
            {
                description: `Azbil compact level transmitters feature higher performance for all kinds of fine powder, and bulk solids as well as liquid applications. They can be specified for optimal performance in high temperature, high pressure, corrosive, steam, airborne dust, and turbulence conditions.`,
                link: `https://us.azbil.com/category/industrial-automation/level-management/`,
                picPaths: [
                    require("../assets/images/products/level/microwave.png"),
                ]
            },
        ]
    },
]

export const instrumentationProductLines = [
    {
        name: 'Gauge Pressure Transmitter',
        thumbPath: require("../assets/images/products/instrumentation/Gauge-Pressure-Transmitter.png"),
        description: `The Advanced Gauge Pressure Transmitter is a microprocessor based smart transmitter that features high performance and excellent stability.  Capable of measuring gas, liquid, vapor, and liquid levels, it transmits 4 to 20 mA DC analog and and digital signals according to the measured pressure.  It can also execute two-way communications between the communicator, thus facilitating self diagnosis, range setting , and automatic zero adjustment.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `The Advanced Gauge Pressure Transmitter is a microprocessor based smart transmitter that features high performance and excellent stability.  Capable of measuring gas, liquid, vapor, and liquid levels, it transmits 4 to 20 mA DC analog and and digital signals according to the measured pressure.  It can also execute two-way communications between the communicator, thus facilitating self diagnosis, range setting , and automatic zero adjustment.`,
                link: `https://us.azbil.com/product-series/at9000-advanced-transmitter-for-gauge-pressure/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/Gauge-Pressure-Transmitter.png")
                ]
            },
        ]
    },
    {
        name: 'Advanced Temperature Transmitter',
        thumbPath: require("../assets/images/products/instrumentation/Advanced-Temperature-Transmitter.png"),
        description: `Azbil’s ATT082 Advanced Temperature Transmitter provides a high level of functionality, versatility and safety for the most critical applications in your operation. The ATT082 can operate as a single or dual input device. In the dual input mode you can select between dual measurements, hot sensor back-up, differential temperature measurement, sensor drift detection or average temperature. It is certified by TUV to IEC1508 for use in Safety Instrumented Systems.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `Azbil’s ATT082 Advanced Temperature Transmitter provides a high level of functionality, versatility and safety for the most critical applications in your operation. The ATT082 can operate as a single or dual input device. In the dual input mode you can select between dual measurements, hot sensor back-up, differential temperature measurement, sensor drift detection or average temperature. It is certified by TUV to IEC1508 for use in Safety Instrumented Systems.`,
                link: `https://us.azbil.com/product-series/att082-advanced-temperature-transmitter/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/Advanced-Temperature-Transmitter.png"),
                ]
            },
        ]
    },
    {
        name: 'RTD’s',
        thumbPath: require("../assets/images/products/instrumentation/RTD.png"),
        description: `The SPC625A is a platinum resistance temperature detector that uses a JIS JPt100ohm element, while the SPC625B uses a JIS Pt100ohm element. This is a screw-in temperature detector with a stainless steel protection tube. It is mainly used to detect the temperature of gas, liquid, and steam.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `The SPC625A is a platinum resistance temperature detector that uses a JIS JPt100ohm element, while the SPC625B uses a JIS Pt100ohm element. This is a screw-in temperature detector with a stainless steel protection tube. It is mainly used to detect the temperature of gas, liquid, and steam.`,
                link: `https://us.azbil.com/product-series/spc625a-platinum-resistance-temperature-detector/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/RTD.png"),
                ]
            },
        ]
    },
    {
        name: 'Remote Seals',
        thumbPath: require("../assets/images/products/instrumentation/remote-seals.png"),
        description: `Paired with the Advanced Pressure Transmitter, Azbil North America is able to provide an extensive line of Remote Diaphragm Seals. From cryogenic to high-temperature applications, we can draw upon decades of experience designing and manufacturing remote diaphragm seals for process control to find a transmitter/remote seal system that fits your needs.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `Paired with the Advanced Pressure Transmitter, Azbil North America is able to provide an extensive line of Remote Diaphragm Seals. From cryogenic to high-temperature applications, we can draw upon decades of experience designing and manufacturing remote diaphragm seals for process control to find a transmitter/remote seal system that fits your needs.`,
                link: `https://us.azbil.com/product-series/at9000-advanced-pressure-transmitter-with-remote-diaphragm-seals/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/remote-seals.png"),
                ]
            },
        ]
    },
    {
        name: 'Direct Mount Transmitter',
        thumbPath: require("../assets/images/products/instrumentation/Direct-Mount-Transmitter.png"),
        description: `Users of the AT9000 Gauge Pressure transmitters can select either In-Line (Direct Mount) or Dual-Head style to fit their needs. Available ranges include -14.7 to 500 psig, -14.7 to 2000 psig and -14.7 to 6000 psig.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `Users of the AT9000 Gauge Pressure transmitters can select either In-Line (Direct Mount) or Dual-Head style to fit their needs. Available ranges include -14.7 to 500 psig, -14.7 to 2000 psig and -14.7 to 6000 psig.`,
                link: `https://us.azbil.com/product-series/at9000-advanced-direct-mount-pressure-transmitter/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/Direct-Mount-Transmitter.png"),
                ]
            },
        ]
    },
    {
        name: 'Differential Pressure Transmitter',
        thumbPath: require("../assets/images/products/instrumentation/Differential-Pressure-Transmitter.png"),
        description: `Users of the AT9000 Gauge Pressure transmitters can select either In-Line (Direct Mount) or Dual-Head style to fit their needs. Available ranges include -14.7 to 500 psig, -14.7 to 2000 psig and -14.7 to 6000 psig.`,
        category: 'Instrumentation',
        productSets: [
            {
                description: `Users of the AT9000 Gauge Pressure transmitters can select either In-Line (Direct Mount) or Dual-Head style to fit their needs. Available ranges include -14.7 to 500 psig, -14.7 to 2000 psig and -14.7 to 6000 psig.`,
                link: `https://us.azbil.com/product-series/at9000-advanced-transmitter-for-differential-pressure/`,
                picPaths: [
                    require("../assets/images/products/instrumentation/Differential-Pressure-Transmitter.png"),
                ]
            },
        ]
    }
]

export const automationProductLines = [
    {
        name: 'Rexa Electraulic Actuation',
        thumbPath: require("../assets/images/products/automation/rexa/rexa-electraulic.png"),
        description: `Since 1981, REXA, Inc. has developed and manufactured a unique brand of actuation technology – Electraulic™ Actuation. Our industrial-grade Linear and Rotary actuators combine the simplicity of electric operation, power of hydraulics, reliability of solid state electronics and flexibility of user-configured control. REXA actuators fit any application requiring accurate positioning, hydraulic stability and high reliability with minimal maintenance in a variety of industries across the globe.`,
        category: 'Automation',
        productSets: [
            {
                subheader: "Linear Actuators",
                description: `The Xpac Linear Actuator utilizes a double acting hydraulic cylinder driven by one or more Electraulic™ Power Modules. It is configurable to fit a wide variety of control and isolation applications across many different industries. For both new equipment and retrofits, REXA manufactures the mounting bracket and stem adapter to fit any style valve, gate, damper or turbomachinery.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/rexa/rexa-electraulic.png"),
                ]
            },
            {
                subheader: "Rotary Actuators",
                description: `REXA Rotary Actuators utilize a rack and pinion hydraulic cylinder driven by one or more Electraulic™ Power Modules. Rotary actuators are commonly used on ball and butterfly valve applications across many different industries. REXA manufactures the valve mounting bracket and stem adapter to suit any valve manufacturer or type.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/rexa/rotary.png")
                ]
            },
            {
                subheader: "Damper Drives",
                description: `REXA Damper Drives can be configured to utilize a rack and pinion hydraulic cylinder or a double acting linear cylinder driven by one or more Electraulic™ Power Modules. Either configuration may be chosen to suit an application’s specific installation requirements. Our damper drives are commonly used on fan and stack dampers, burner tilts and other combustion control applications. REXA manufactures drive base and drive arm or mid/end pivot arrangement to suit any installation scenario.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/rexa/damper.png")
                ]
            },
        ]
    },
    {
        name: 'IMI-STI',
        thumbPath: require("../assets/images/products/automation/imi-sti/rotary-1.png"),
        description: `IMI STI's long experience and know how has been used to develop a range of quarter turn hydraulic and pneumatic actuators. They are designed for the most hostile environments suitable for all onshore and offshore applications for on-off and modulating control valves`,
        category: 'Automation',
        productSets: [
            {
                subheader: "Linear Actuators",
                description: `Our pneumatic linear piston actuators are designed to drive control valves for the most demanding applications in the power and oil and gas industries: such as turbine bypass; steam conditioning valves; desuperheaters; compressors and antisurge valves.  IMI STI linear actuators ensure smooth and precise valve operation without any maintenance for the whole operating life.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/imi-sti/linear.png")
                ]
            },
            {
                subheader: "Rotary Scotch Yoke",
                description: `Rotary actuators are designed for use with quarter turn valves such as ball or butterfly valves. Our rotary actuators are designed to withstand the most hostile environment conditions, and as such are suitable for all onshore and offshore applications, covering the general on-off and modulating valves.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/imi-sti/rotary-1.png"),
                    require("../assets/images/products/automation/imi-sti/rotary-2.png"),
                    require("../assets/images/products/automation/imi-sti/rotary-3.png"),
                    require("../assets/images/products/automation/imi-sti/rotary-4.png")
                ]
            },
            {
                subheader: "Digital Positioners",
                description: `IMI STI positioners such as FasTrak is a high-capacity, high-precision digital-pneumatic valve controller that replaces a conventional positioner with excellent dynamic performance and high flow, it is compatible with double and single acting actuators, with or without a spring, a piston or a diaphragm.​`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/imi-sti/digital-positioners.png")
                ]
            },
        ]
    },
    {
        name: 'Badger Meter',
        thumbPath: require("../assets/images/products/automation/badger/seva.png"),
        description: `Research Control Valves offer both Pneumatic (Types 754, 755, 759, 766, PA35, PA58) and Electric (SEVA 100, SEVA 200, EVA-1), actuators.  Our Pneumatic actuators range from a small profile ¼ in. (7.5 in2) actuator to our new larger 2 in. (58 in2) actuator.  We have a full range of pneumatic solutions to precisely reflect the accuracy of our control valves.`,
        category: 'Automation',
        productSets: [
            {
                subheader: "SEVA Linear Electric",
                description: `The SEVA is our next generation Smart Electric Valve Actuator that provides our customers with an electric actuator with best-in-class features. This product was designed for extreme conditions with military grade components while providing the accuracy and repeatability the market demands.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/badger/seva.png")
                ]
            },
            {
                subheader: "SRD991 Intelligent Valve Positioner",
                description: `Research Control® SRD smart valve positioners deliver actionable diagnostic information about valve performance and assist compliance with fugitive emissions regulations. SRI analog valve positioners are also available.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/badger/SRD991.png")
                ]
            },
        ]
    },
    {
        name: 'Delval Actuators',
        thumbPath: require("../assets/images/products/automation/delval/electric.png"),
        description: `Delval Controls offers pneumatic and electric actuators with ISO mounting, allowing for direct mounting to our valves in many cases.`,
        category: 'Automation',
        productSets: [
            {
                subheader: "Rack & Pinion",
                description: `Double acting and Spring return rack and pinion actuators delivering outputs up to 16,815 in lbs.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/delval/rack-pinion.png"),
                ]
            },
            {
                subheader: "Scotch Yoke",
                description: `Double acting and spring return scotch yoke actuators with ISO 5211 mounting and Namur topworks interface.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/delval/scotch-yoke.png"),
                ]
            },
            {
                subheader: "Series 2E Electric",
                description: `Direct mount quarter turn electric actuator with torque outputs up to 26,550 in lbs.`,
                link: ``,
                picPaths: [
                    require("../assets/images/products/automation/delval/electric.png"),
                ]
            },
        ]
    },
    {
        name: 'Clearguard Autorodder',
        thumbPath: require("../assets/images/products/automation/autorodders.png"),
        description: `Prevents partially plugged tapping points and ports, improving safety, efficiency and process measurement accuracy.`,
        category: 'Automation',
        productSets: [
            {
                description: `Prevents partially plugged tapping points and ports, improving safety, efficiency and process measurement accuracy.`,
                link: `http://clearguard.com/`,
                picPaths: [
                    require("../assets/images/products/automation/autorodders.png"),
                ]
            },
        ]
    }
]

export const filtrationProductLines = [
    {
        name: 'Oil & Gas Filtration',
        thumbPath: require("../assets/images/products/filtration/oil-and-gas-spifil.png"),
        description: `At SPIFIL Group, we create and deliver the ecological answer to your filtration needs. Our staff is highly prepared and motivated; we design and manufacture our products following high quality standards, and provide an exceptional technical service. We treasure more than 20 years of expertise in the field.`,
        category: 'Filtration',
        productSets: [
            {
                description: `At SPIFIL Group, we create and deliver the ecological answer to your filtration needs. Our staff is highly prepared and motivated; we design and manufacture our products following high quality standards, and provide an exceptional technical service. We treasure more than 20 years of expertise in the field.`,
                link: `http://spifil.com/en/industry/#div-petroleo`,
                picPaths: [
                    require("../assets/images/products/filtration/oil-and-gas-spifil.png"),
                ]
            },
        ]
    }
]

export const pipingSystemsProductLines = [
    {
        name: 'PTFE Lined Composite',
        thumbPath: ``,
        description: ``,
        category: 'Piping Systems',
        productSets: [
            {
                description: ``,
                link: ``,
                picPaths: [

                ]
            },
        ]
    },
    {
        name: 'PTFE Lined Alloys',
        thumbPath: ``,
        description: ``,
        category: 'Piping Systems',
        productSets: [
            {
                description: ``,
                link: ``,
                picPaths: [

                ]
            },
        ]
    },
    {
        name: 'Composite',
        thumbPath: ``,
        description: ``,
        category: 'Piping Systems',
        productSets: [
            {
                description: ``,
                link: ``,
                picPaths: [

                ]
            },
        ]
    },
    {
        name: 'Fiberglass and Dual Laminate',
        thumbPath: ``,
        description: ``,
        category: 'Piping Systems',
        productSets: [
            {
                description: ``,
                link: ``,
                picPaths: [
                ]
            },
        ]
    }
]

export const tanksPumpsProductLines = [

]

export const systemAccessoriesProductLines = [

]



// Sub companies
export const controlSubCompanies = [
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-cci.png")
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-truflo.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/RCV.png"),
    },
    {
        picPath: require("../assets/images/external-logos/warren-controls.png"),
    },
    {
        picPath: require("../assets/images/external-logos/dft.png"),
    },
]

export const isolationSubCompanies = [
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-orton.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-zj.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-truflo.png"),
    },
    {
        picPath: require("../assets/images/external-logos/cameron.png"),
    },
    {
        picPath: require("../assets/images/external-logos/dft.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/pureflex.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/chemtite.png"),
    },
    {
        picPath: require("../assets/images/external-logos/sub-companies/conley.png"),
    },
    {
        picPath: require("../assets/images/external-logos/delval.png"),
    },
]

export const flowSubCompanies = [

]

export const levelSubCompanies = [

]

export const instrumentationSubCompanies = [

]

export const automationSubCompanies = [
    {
        picPath: require("../assets/images/external-logos/sub-companies/imi-sti.png")
    },
    {
        picPath: require("../assets/images/external-logos/badger-meter.png")
    },
    {
        picPath: require("../assets/images/external-logos/delval.png")
    },
    {
        picPath: require("../assets/images/external-logos/rexa.png")
    },
    {
        picPath: require("../assets/images/external-logos/clearguard.png")
    },
]

export const filtrationSubCompanies = [

]

export const pipingSystemsSubCompanies = [

]

export const tanksPumpsSubCompanies = [

]

export const systemAccessoriesSubCompanies = [

]


export const allProductLines = controlProductLines.concat(
        isolationProductLines, 
        automationProductLines, 
        pipingSystemsProductLines, 
        flowProductLines, 
        levelProductLines, 
        instrumentationProductLines, 
        // tanksPumpsProductLines, 
        filtrationProductLines, 
        // systemAccessoriesProductLines
    );