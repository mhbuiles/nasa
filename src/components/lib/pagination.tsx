import { Button } from "@components/lib";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type PaginationProps = {
  previousPage: () => void;
  nextPage: () => void;
};

type PaginationWithTotalProps = {
  page: number;
  total: number;
  canNextPage?: never;
  canPreviousPage?: never;
} & PaginationProps;

type PaginationWithCanProps = {
  page?: never;
  total?: never;
  canNextPage: boolean;
  canPreviousPage: boolean;
} & PaginationProps;

export const Pagination = ({
  page,
  previousPage,
  canNextPage,
  canPreviousPage,
  nextPage,
  total,
}: PaginationWithTotalProps | PaginationWithCanProps): React.ReactElement => {
  const canNext = total ? Number(page) < total / 25 - 1 : canNextPage;
  const canPrevious = total ? Number(page) > 0 : canPreviousPage;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-x-5 px-4 py-5"
    >
      <Button
        type="button"
        onClick={previousPage}
        appearance="primary"
        leftIcon={HiChevronLeft}
        status={canPrevious ? "idle" : "disabled"}
      >
        Previous
      </Button>
      <Button
        type="button"
        onClick={nextPage}
        appearance="primary"
        rightIcon={HiChevronRight}
        status={canNext ? "idle" : "disabled"}
      >
        Next
      </Button>
    </nav>
  );
};
