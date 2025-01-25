import Button from "../../../shared/components/Button";
import Dropdown from "../../../shared/components/Dropdown";

type TaskPaginationControlProps = {
  handlePageSelector: (page: number) => void;
  page: number;
  totalData: number;
  togglePerPage: (perPage: number) => void;
  perPage: number;
};

function TaskPaginationControl({
  handlePageSelector,
  page,
  totalData,
  togglePerPage,
  perPage,
}: TaskPaginationControlProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mt-4 px-2">
      <div className="w-full md:w-auto">
        <Dropdown
          label={"page"}
          options={[5, 10, 15]}
          selectedValue={perPage}
          onSelect={togglePerPage}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center space-x-2">
        <Button
          className="text-gray-700 cursor-pointer bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page <= 1}
          onClick={() => handlePageSelector(page - 1)}
        >
          Previous
        </Button>

        <div className="flex flex-wrap justify-center">
          {[...Array(totalData)].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = page === pageNumber;

            return (
              <Button
                key={pageNumber}
                onClick={() => handlePageSelector(pageNumber)}
                className={`border border-blue-500 rounded-md me-1 my-1 
                ${isActive ? "bg-blue-600 text-white" : "bg-white text-blue-500"} 
                hover:bg-blue-600 hover:text-white`}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>

        <Button
          className="border border-gray-300 rounded-md hover:bg-gray-100"
          disabled={page >= totalData}
          onClick={() => handlePageSelector(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default TaskPaginationControl;
