import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from './app/user-login/user-login.component';






const arr: Routes = [
  { path: '', component: UserLoginComponent},
  // {
  //   path: 'nav', canActivate: [UserauthguardService], component: MainNavComponent, children: [
  //     { path: '', component: UserComponent },
  //     { path: 'updateUser/:user_email', component: UpdateUserComponent },
  //     { path: 'adduser', component: AddUserComponent },
  //     { path: 'customer', component: CustomerComponent },
  //     {path:'addCustomer',component:AddCustomerComponent},
  //     {path:'updatecustomer/:customer_id',component:UpdateCustomerComponent},
  //     { path: 'emp', component: EmpComponent },
  //     { path: 'addemp', component: AddEmpComponent },
  //     { path: 'updateemp/:emp_id', component: UpdateEmpComponent },
  //     { path: 'product', component: ProductComponent },
  //     { path: 'addproduct', component: AddProductComponent },
  //     { path: 'updateproduct/:pro_id', component: UpdateproductComponent },
  //     { path: 'stock', component: StockComponent },
  //     { path: 'addstock', component: AddStockComponent },
  //     { path: 'updatestock/:stock_id', component: UpdateStockComponent },
  //     { path: 'signup', component: SignupComponent },
  //     { path: 'order', component: OrderComponent },
  //     {path:'addorder',component:AddorderComponent},
  //     {path:'updateorder/:order_id',component:UpdateorderComponent},
  //     {path:'orderdelivery',component:OrderDeliveryComponent},
  //     {path:'addOrderDeliveryAssigned',component:AddOrderDeliveryAssignedComponent},
  //     { path: 'bill', component: BillComponent },
  //     {path:'generateBill/:order_id',component:GenerateBillComponent},
  //     { path: '**', component: PagenotfoundComponent }
  //   ]
  // },

];
export const routingArr = RouterModule.forRoot(arr);
