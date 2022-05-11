import { useContext, useState, useEffect } from "react";
import { AdressContext } from "../context/AddressContext";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function PaginatedTable() {
  const { adresses, isLoading, filteredItems } = useContext(AdressContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  let itemsPerPage = 10;

  useEffect(() => {
    if (!filteredItems && !filteredItems?.length > 0) {
      return;
    }
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredItems?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredItems?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredItems]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems?.length;
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
