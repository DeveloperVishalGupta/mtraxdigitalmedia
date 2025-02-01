import React from 'react'

function Contact() {
    return (
        <Popover shouldCloseOnInteractOutside={false} placement="bottom" showArrow={true} style={{ width: 364 }}>
            <PopoverTrigger>
                <div className="font-normal hover:text-spatikaDarkRed cursor-pointer">
                    Contact us
                </div>

            </PopoverTrigger>
            <PopoverContent >
                <div className="px-1 py-2">

                    <div className="border-b-2 px-3 py-2">

                        <div className="text-small font-bold mb-3">Contact Information</div>
                        {contactNumbers.map((contactNumber, index) => {
                            return (
                                <div key={index} className="mb-2 border-2 rounded-lg px-3 py-2 border-spatikaDarkRed bg-spatikaelightGrayTransparent">
                                    <div className="flex items-center justify-start ">

                                        <PhoneIcon color={'gray'} width={12} height={14} />
                                        <p className="font-normal mb-0 ps-3 text-sm">Phone {index + 1}</p>
                                    </div>
                                    <div className="border-slate-200 flex justify-between">

                                        <p className="font-normal ms-3  ps-3 text-sm">{contactNumber}</p>
                                        <Button href={`tel:${contactNumber}`} style={{ boxShadow: 'inset 0 2px 0 0 hsla(0, 0%, 100%, .2), inset 0 -1px 0 0 rgba(0, 0, 0, .25), 0 2px 6px 0 rgba(0, 0, 0, .1)' }} size="sm" variant="bordered" className="h-6 bg-spatikaDarkRed text-white">
                                            Call
                                        </Button>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>

                    {/* Email detail  */}
                    <div className="px-3 py-2 border-b-2">
                        <div className="text-small font-bold mb-3">Email Address</div>
                        <div className=" mb-2 flex justify-between">
                            <div className="flex items-center justify-start ">
                                <At color={'gray'} width={12} height={14} />
                                <p className="font-normal mb-0 ps-3 text-sm">spatikachemburdesk@gmail.com</p>
                            </div>
                            <Button href={`mailto:${'spatikachemburdesk@gmail.com'}`} size="sm" variant="bordered" className="h-6">
                                Email
                            </Button>
                        </div>
                    </div>
                    {/* Email detail  */}
                    <div className="px-3 py-2">
                        <div className="text-small font-bold mb-3">Business Address</div>
                        <div className=" mb-2 flex justify-between items-center">
                            <div className="flex items-center justify-start ">
                                <LocationCrosshairs color={'gray'} width={50} height={50} />
                                <p className="font-normal mb-0 ps-3 text-sm">101,Spatika salon and spa,Silvento Building first floor, Central Avenue, Opposite OLPS church, Chembur East, Mumbai, Maharashtra 400071</p>
                            </div>
                            <Button onPress={() => {
                                handleShowRoute()
                            }} size="sm" variant="bordered" className="h-6">
                                Map
                            </Button>
                        </div>
                    </div>

                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Contact