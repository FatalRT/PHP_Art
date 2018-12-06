<?php
/**
 * Created by PhpStorm.
 * User: taoch
 * Date: 2018/12/3
 * Time: 10:26
 */

class user_model extends CI_Model

{
    public function __construct()
    {
        parent::__construct();

    }
    public function check_user($username, $password){
        $q = $this->db
            ->where(array(
                'name'=>$username,
                'password'=>$password,
            ))->get('user')->result_array();
        if(isset($q[0])){
            return true;
        }
        return false;
    }
    public function register($username, $password){
        $q = $this->db
            ->where(array(
                'name'=>$username,
            ))->get('user')->result_array();
        if(isset($q[0])){
            return false;//已被注册，返回flase
        }else{
            $data = array(
                'name'=>$username,
                'password'=>$password,
            );
            $this->db->insert('user',$data);
            return true;
        }
    }
}