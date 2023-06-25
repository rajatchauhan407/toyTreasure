import "./index.scss";

export default function OrgWishlist(){
    let orgWishlistData = [
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        }
    ]
    return (<div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>Tag Category</td>
                            <td>Qty Required</td>
                            <td>Qty Received</td>
                            <td>Pending</td>
                            <td>Icon</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orgWishlistData.map((el)=>{
                            return <tr>
                            <td>Stuffed Animals</td>
                            <td>38</td>
                            <td>26</td>
                            <td>08</td>
                            <td><i className="fa-solid fa-trash"></i></td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>);
}