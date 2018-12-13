<?php
/**
 * Created by PhpStorm.
 * User: taoch
 * Date: 2018/12/3
 * Time: 10:07
 */
defined('BASEPATH') OR exit('No direct script access allowed');
class users extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
        $this->load->helper('url');
    }

    public function send()
    {
        $username = $this->input->post('username');//用户名
        $password = $this->input->post('password');//密码
        if($this->user_model->check_user($username, $password)){//验证密码是否正确
            $user_data = array(
                'name' => $username,
                'password' => $password
            );
            $this->session->set_userdata($user_data);//Session
            success('users/puser', '登陆成功！');//自定义成功跳转函数
        }else{
            error('账号密码错误');
        }

    }

    public  function  user()
    {
        if (isset($this->session->u_name)){//后台用户已经登陆
            $this->load->view('home/user.html');
        }else{//后台用户还未登陆
            $this->load->view('home/index.html');
        }
    }
    public function signup()
    {
        $username = $this->input->post('username');//用户名
        $password = $this->input->post('password');//密码
        if($this->user_model->register($username, $password)){
            success("Welcome/login","注册成功,请进行登录");
        }else{
            error("用户名重复！！！");
        };
    }
    public function puser()
    {
        $this->load->view('home/user.html');
    }
}