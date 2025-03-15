import { Checkbox } from "@/ui";

import { useGetCatalogCategories } from "@/apis";
import { CatalogFilterCategoriesProps } from "./CatalogFilterCategories.types";

import styles from "./CatalogFilterCategories.module.scss";

const CatalogFilterCategories = ({
    selectedItems,
    onSelect
}: CatalogFilterCategoriesProps) => {
    const { data: categoriesData, isLoading: categoriesIsLoading } =
        useGetCatalogCategories();

    const handleSelectItem = (isChecked: boolean, id: string) => {
        onSelect(isChecked, id);
    };

    return (
        <div className={styles.catalog}>
            {!categoriesIsLoading
                ? categoriesData?.data.map((category) => (
                      <div key={category.id} className={styles.catalog__item}>
                          <Checkbox
                              checked={selectedItems.includes(category.id)}
                              onChange={(e) =>
                                  handleSelectItem(
                                      e.target.checked,
                                      category.id
                                  )
                              }
                          />
                          <p className={styles.catalog__item_text}>
                              {category?.title}
                          </p>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default CatalogFilterCategories;
