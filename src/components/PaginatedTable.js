import { useContext, useState, useEffect } from "react";
import { AdressContext } from "../context/AddressContext";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function PaginatedTable() {
  const { adresses, isLoading } = useContext(AdressContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  let itemsPerPage = 10;

  useEffect(() => {
    if (!adresses && !adresses?.length > 0) {
      return;
    }
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(adresses?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(adresses?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, adresses]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % adresses?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </>
      )}
    </>
  );
}

export default PaginatedTable;
