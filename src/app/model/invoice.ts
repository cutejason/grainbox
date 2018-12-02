export class Invoice {
    // line: Line;
    // customerRef: CustomerRef
    line: any[]
    customerRef: any;
}

export class Line {
    amount: number;
    detailType: string;
    detail: SalesItemLineDetail;
}

export class CustomerRef {
    value: number;
}

export class SalesItemLineDetail {
    itemRef: ItemRef;
}

export class ItemRef{
    value: string;
}