import React from "react";
import { Modal } from "./Modal";
export const Navbar = () => {
	return (
		<div class="d-flex align-items-center justify-content-center">
  <div className="m-4">
    <h1 className="m-2">contact list app</h1>
    <div class="text-center">
	<button type="button" data-bs-toggle="modal" data-bs-target="#editModal--1" class="btn btn-outline-primary">Add</button>
    </div>
    <Modal index="-1"></Modal>
  </div>
</div>

	);
};