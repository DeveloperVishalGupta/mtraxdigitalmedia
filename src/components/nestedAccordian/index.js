import { Accordion, AccordionItem } from "@nextui-org/react";

export const NestedAccordion = ({ data }) => {
    console.log(data);

    return (
        // <Accordion>
        //     {Object.keys(data.menu.haircare).map((key) => {
        //         const value = data[key];
        //         return (
        //             <AccordionItem key={key} title={key}>
        //                 {Array.isArray(value) ? (
        //                     <ul>
        //                         {value.map((item, index) => (
        //                             <li key={index} style={{ marginBottom: "10px" }}>
        //                                 <strong>{item.name}</strong>
        //                                 <div>Rate: {item.rate}</div>
        //                                 <div>Members Rate: {item.members_rate}</div>
        //                                 {item.time && <div>Time: {item.time} minutes</div>}
        //                                 {item.service && item.service.length > 0 && (
        //                                     <div>Services: {item.service.join(", ")}</div>
        //                                 )}
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 ) : typeof value === "object" ? (
        //                     <NestedAccordion data={value} />
        //                 ) : (
        //                     <div>{value}</div>
        //                 )}
        //             </AccordionItem>
        //         );
        //     })}
        // </Accordion>
        <Accordion>
            {
                data.menu.categories.map((item, index) => {
                    return <AccordionItem key={index} aria-label="Accordion 1" title={item}>
                        {'defaultContent'}
                    </AccordionItem>
                })
            }

        </Accordion>
    );
};