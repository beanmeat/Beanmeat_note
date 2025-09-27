package com.io.bio;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

/**
 * 客户端
 */
public class SocketClient {

    public static void main(String[] args) throws IOException {
        // 连接服务器
        Socket socket = new Socket("localhost", 9090);

        // 发送数据
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("hello bio form client 1".getBytes());
        outputStream.flush();
        // 接受返回数据
        InputStream inputStream = socket.getInputStream();
        byte[] bytes = new byte[1024];
        int len = inputStream.read(bytes);
        System.out.println("receive server data:" + new String(bytes, 0, len));
        socket.close();
    }
}
