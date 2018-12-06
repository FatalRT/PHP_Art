<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index()
    {
        $this->load->view('home/index.html');
    }
    public function login()
    {
        $this->load->view('home/login.html');
    }
    public function signup()
    {
        $this->load->view('home/signup.html');
    }

}
