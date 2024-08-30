import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import Template from "../layout/template";
import ErrorPage from "../page/ErrorPage";
import AdminPage from "../page/AdminPage";
import Main from "../page/MainPage";
import FavoritePage from "../page/FavoritePage";
import ProductItem from "../component/Products/ProductIem";
import AuthPage from "../page/AuthPage";
import EditProduct from "../component/Products/EditProduct";
import AddProduct from "../component/Products/AddProduct";
import ProductForm from "../component/Products/ProductForm";
import AdminControl from "../component/AdminControl/AdminControl";
import Users from "../component/AdminControl/Users";
import Category from "../component/AdminControl/Category";
import Statistic from "../component/AdminControl/Statistic";
import NewComponent from "../component/New Component/newComponent";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Template />}
            // loader={rootLoader}
            // action={rootAction}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Main />} />
                <Route path="test-market" element={<Main />} />
                <Route path="test-market/admin" element={<AdminPage />}>
                    <Route index element={<Statistic />} />
                    <Route path="test-market/add" element={<AddProduct />} />
                    <Route path="test-market/edit" element={<EditProduct />} />
                    <Route path="test-market/edit/:id" element={<ProductForm />} />
                    <Route path="test-market/control" element={<AdminControl />}>
                        <Route path="test-market/discount" element={<h1>discount</h1>} />
                        <Route path="test-market/users" element={<Users />} />
                        <Route path="test-market/category" element={<Category />} />
                    </Route>
                </Route>
                <Route path="test-market/favorite" element={<FavoritePage />} />
                <Route path="test-market/product/:id" element={<ProductItem />} />
                <Route path="test-market/login" element={<AuthPage />} />
                <Route path="test-market/newcomp" element={<NewComponent />} />
            </Route>
        </Route>
    )
);
